import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { UserModel } from "./db";
import {userMiddleware} from "./middleware"
import jwt from 'jsonwebtoken';
const app = express();
// const router = express.Router();
dotenv.config();
const PORT = process.env.BE_PORT;
const DB_URL = process.env.DB_URL;
const JWT_SECRET = process.env.JWT_SECRET;

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
app.get('/api/v1/content', userMiddleware, (req, res) => {

});
app.post('/api/v1/content', (req, res) => {

});
app.delete('/api/v1/content', (req, res) => {

});
app.post('/api/v1/share', (req, res) => {

})
app.get('/api/v1/:shareLink' , (req, res) => {

})



async function main(){
    // @ts-ignore
    await mongoose.connect(DB_URL);
    app.listen(PORT);
}

main();
