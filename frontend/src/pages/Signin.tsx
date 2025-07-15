import { useRef } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import {  useNavigate } from "react-router-dom";


const BE_URL = import.meta.env.VITE_BE_URL;

export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function handleSignin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BE_URL}/api/v1/signin`, {
            username, 
            password
        });

        const jwt  = response.data.token;

        localStorage.setItem("token", jwt);

        navigate("/dashboard");
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="bg-white border border-slate-400 flex flex-col w-80 items-center p-9 rounded-lg shadow-2xl">
            <div className="flex flex-col w-full">
                <Input reference={usernameRef} placeholder="Username"/>
                <Input reference={passwordRef} placeholder="Password"/>
            </div>
            <div className="flex justify-center pt-4 pb-2 flex-col w-full">
                <Button onClick={handleSignin} loading={false} variant="primary" text="Signin" size="md"/>
            </div>
            </div>
        </div>
    )
}