import { DeleteIcon } from "./icons/DeleteIcon"
import { GotoArrow } from "./icons/GotoArrowIcon"
import { TwitterIcon } from "./icons/TwitterIcon"
import { YoutubeIcon } from "./icons/YoutubeIcon"

export interface CardProps {
    title: string, 
    link: string, 
    type: "youtube" | "twitter", 
    onDelete: (id: string) => void, 
    id: string, 
}

export const Card = ({title, link, type, onDelete, id}: CardProps) => { 

    return (
            <div className=" border-slate-200 border h-80 w-90 bg-white p-2 shadow-md rounded-md mt-3 overflow-x-clip overflow-y-auto ">
            <div className="flex justify-between items-center text-center pl-1 mt-1">
                <div  className="flex items-center font-bold text-gray-600">
                <div className="ml-2">
                    {type === "youtube" &&
                <YoutubeIcon size="xl"/>}
                    {type === "twitter" &&
                <TwitterIcon size="xl"/>}
                </div>
                <p className="text-lg">{title}</p>
                </div>
                <div className="flex text-slate-400 pr-1">
                    <div className="mr-2">
                    <a href={link} target="_blank">
                        {                    <GotoArrow size="lg" />
                        }
                    </a>
                    </div>
                    <button 
                    onClick={() => onDelete(id)}
                    className="cursor-pointer">
                    <DeleteIcon size="lg" />
                    </button>
                </div>
            </div>

            <div className="flex justify-center w-full mt-3.5 min-h-40">
                {type === "youtube" &&
                <iframe className="object-cover w-90 h-50" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


                {type === "twitter" && 
                <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>
            </div>
    )
}