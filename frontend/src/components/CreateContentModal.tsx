import { Button } from "./Button";
import { CrossIcon } from "./icons/CrossIcon";
import { Input } from "./Input";


export const CreateContentModal = ({open, onClose}: {open:boolean, onClose: () => void}) => {
return (
    <div>
        {open &&
        <div className="w-screen h-screen fixed top-0 left-0 bg-gray-400 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-5 rounded-md ">
                    <div className="flex justify-end mb-2">   
                        <div className=" cursor-pointer text-red-600" onClick={onClose}>
                            <CrossIcon size="lg"/>
                            </div>                            
                    </div>
                    <div className="flex flex-col">
                        <Input placeholder="Title"/>
                        <Input placeholder="Link"/>
                    </div>
                    <div className="flex justify-center mt-2">
                    <Button variant="primary" text="Submit" size="sm"/>
                    </div>
                </span>
            </div>
        </div>
        }
    </div>
);
}


