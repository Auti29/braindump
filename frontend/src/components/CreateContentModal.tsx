import { useRef, useState } from "react";
import { Button } from "./Button";
import { CrossIcon } from "./icons/CrossIcon";
import { Input } from "./Input";
import axios from "axios";
const BE_URL = import.meta.env.VITE_BE_URL;


enum ContentlinkType {
    Youtube = "youtube", 
    Twitter = "twitter"
}

export const CreateContentModal = ({open, onClose}: {open:boolean, onClose: () => void}) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentlinkType.Youtube);

    const handleSubmit = async() => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BE_URL}/api/v1/content`, {
            title, 
            link, 
            type
        },{
        headers:{
            Authorization: localStorage.getItem("token")
        }
        })
       onClose(); 
    } 

return (
    <div>
        {open &&
        <div className="w-screen h-screen fixed top-0 left-0 bg-gray-100 flex justify-center ">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-5 rounded-md ">
                    <div className="flex justify-end mb-2">   
                        <button className="cursor-pointer bg-white text-red-600 h-7 text-center" onClick={onClose}>
                            <CrossIcon size="lg"/>
                            </button>                            
                    </div>
                    <div className="flex flex-col">
                        <Input reference={titleRef} placeholder="Title"/>
                        <Input reference={linkRef} placeholder="Link"/>
                    </div>
                    <div>
                    <h1 className="font-bold ml-3 mt-3">Type:</h1>
                    <div className="flex justify-center mb-3 p-3 gap-4">
                        <Button onClick={() => setType(ContentlinkType.Youtube)} variant={type === "youtube" ? "primary" : "secondary"} text="Youtube" size="sm"/>
                        <Button onClick={() => setType(ContentlinkType.Twitter)} variant={type === "twitter" ? "primary" : "secondary"} text="Twitter" size="sm"/>
                    </div>
                    </div>
                    <div className="flex justify-center mt-2">
                    <Button onClick={handleSubmit} variant="primary" text="Submit" size="md"/>
                    </div>
                </span>
            </div>
        </div>
        }
    </div>
);
}


