import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
const BE_URL = import.meta.env.VITE_BE_URL;

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleSignup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BE_URL}/api/v1/signup`, {
            username, 
            password
        });
        alert("You have signed up!!");
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="bg-white border border-slate-400 flex flex-col w-80 items-center p-9 rounded-lg shadow-2xl">
            <div className="flex flex-col w-full">
                <Input reference={usernameRef} placeholder="Username"/>
                <Input reference={passwordRef} placeholder="Password"/>
            </div>
            <div className="flex justify-center pt-4 pb-2 flex-col w-full">
                <Button onClick={handleSignup} loading={false} variant="primary" text="Signup" size="md"/>
            </div>
            </div>
        </div>
    )
}