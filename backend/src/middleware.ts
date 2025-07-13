import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


export function userMiddleware(req: Request, res: Response, next: NextFunction){
    const header = req.headers.authorization;
    if(!header || !header.startsWith("Bearer ")){
        return res.status(401).json({ message: "auth header missing!" });
    }

    const token = header.split(" ")[1];
    if(!token){
                return res.status(401).json({ message: "token missing!" });
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET!) as {id:string};
        // @ts-ignore
        req.userId = decoded.id;
        next();
    }catch(err){
                console.log("JWT verification error:", err);
        return res.status(403).json({ message: "Invalid token" });

    }
    
    
}