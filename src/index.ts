import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { UserModel } from "./db";
const app = express();
// const router = express.Router();
dotenv.config();
const PORT = process.env.BE_PORT;
const DB_URL = process.env.DB_URL;
app.use(express.json());

app.post('/api/v1/user/signup', async (req, res) => {
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
app.post('api/v1/user/signin', (req, res) => {

});
app.get('api/v1/user/content', (req, res) => {
//protected route
});
app.post('api/v1/user/content', (req, res) => {
// protected route
});
app.delete('api/v1/user/content', (req, res) => {
// protected route
});
app.post('api/v1/user/share', (req, res) => {
// protected route
})
app.get('api/v1/user/:shareLink' , (req, res) => {

})



async function main(){
    // @ts-ignore
    await mongoose.connect(DB_URL);
    app.listen(PORT);
}

main();
