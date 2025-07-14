import { Shareicon } from "../icons/Shareicon"

export interface CardProps {
    title: string, 
    link: string, 
    type: "youtube" | "twitter"
}


export const Card = ({title, link, type}: CardProps) => {
    return (
        <div>
            <div className="border-slate-200 border max-w-80 bg-white p-2 shadow-md rounded-md">
            <div className="flex justify-between items-center text-center pl-1">
                <div  className="flex items-center font-bold text-gray-600">
                <Shareicon size="lg"/>
                <p className="ml-2 text-lg">{title}</p>
                </div>
                <div className="flex text-slate-400 pr-1">
                    <div className="mr-1">
                    <a href={link} target="_blank">
                        {                    <Shareicon size="lg" />
                        }
                    </a>
                    </div>
                    <div>
                    <Shareicon size="lg" />
                    </div>
                </div>
            </div>

            <div className="w-full mt-3.5 min-h-40">
                {type === "youtube" &&
                <iframe src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


                {type === "twitter" && 
                <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>
            </div>
        </div>
    )
}