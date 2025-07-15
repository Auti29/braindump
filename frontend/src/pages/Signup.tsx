import { Button } from "../components/Button"
import { Input } from "../components/Input"

export const Signup = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="bg-white border border-slate-400 flex flex-col w-80 items-center p-9 rounded-lg shadow-2xl">
            <div className="flex flex-col w-full">
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
            </div>
            <div className="flex justify-center pt-4 pb-2 flex-col w-full">
                <Button loading={false} variant="primary" text="Signup" size="md"/>
            </div>
            </div>
        </div>
    )
}