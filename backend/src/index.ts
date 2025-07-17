import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { UserModel, ContentModel, LinkModel } from "./db";
import {userMiddleware} from "./middleware"
import jwt from 'jsonwebtoken';
import { getRandomString } from "./utils";
import cors from "cors";
const app = express();
// const router = express.Router();
dotenv.config();
const PORT = process.env.BE_PORT;
const DB_URL = process.env.DB_URL;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

app.post('/api/v1/signup', async (req, res) => {
    // todo: zod
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            msg: "Missing inputs"
        })
    }

    try {
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(password, salt);

        await UserModel.create({
            username: username,
            password: hashPassword
        })

        return res.status(200).json({
            msg: "Sign up done"
        })
    } catch (err: any) {
        if (err.code === 11000) {
            return res.status(409).json({
                msg: "User already exists"
            });
        }
        console.error("Signup error:", err);
        return res.status(500).json({
            msg: "Something went wrong",
            error: err.message
        });
    }
    
});


app.post('/api/v1/signin', async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password) {
        return res.status(404).json({
            message: "wrong credentials!"
        })
    }   
    try{
        const user = await UserModel.findOne({username});
        if(!user){
            return res.status(404).json({
            message: "wrong credentials!"
        });
        }

        const isPassCorrect = await bcrypt.compare(password, user.password);
        if(!isPassCorrect){
                        return res.status(404).json({
            message: "wrong credentials!"
        });

        }

        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, JWT_SECRET!)

        return res.status(200).json({
            msg: "Login successful",
            token,
        });

    }catch(err){
        console.log("Signin error");

        return res.status(411).json({
            msg: "Something went wrong",
            error: err
        });
    }
});


app.post('/api/v1/content',userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;

    await ContentModel.create({
        link,
        type,
        title, 
        //@ts-ignore-
        userId: req.userId,
        tags: []
    })

    res.json({
        msg: "content added"
    })

});


app.get('/api/v1/content', userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "-password")

    res.json({
        content
    })

});

app.delete('/api/v1/content/:contentId', userMiddleware, async (req, res) => {
    const contentId = req.params.contentId

    await ContentModel.deleteMany({
        _id: contentId,
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        msg: "content deleted"
    })
});



app.post('/api/v1/share', userMiddleware, async (req, res) => {
    const share = req.body.share;
    const hash = getRandomString(10);
    if(share){
        const existingHash =await  LinkModel.findOne( {
            hash
        }
        )
        if(existingHash){
            return res.json({
                message: "hash exists", 
                hash: existingHash.hash
            })
        }


        await LinkModel.create({
        // @ts-ignore
         userId: req.userId, 
         hash
        })
        return res.json({
        message: "sharable link updated", 
        hash
    })
    }
    else{
        await LinkModel.deleteOne({
        // @ts-ignore
            userId: req.userId
        });
        return res.json({
            message: "link deleted"
        })
    }


})

app.get('/api/v1/brain/:shareLink' , async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    })

    if(!link){
        return res.status(411).json({
            message: "no content to show!"
        });
    }

    const content = await ContentModel.find({
        userId: link.userId
    }).populate("userId");

    if(!content){
        return res.json({
            message: "no content to show!"
        })
    }
    
    return res.status(200).json({
        content
    });
})



async function main(){
    if(!DB_URL){
        return;
    }
    await mongoose.connect(DB_URL);
    app.listen(PORT);
}

main();
