import { AllcontentsIcon } from "./icons/AllcontentsIcon";
import { LogoIcon } from "./icons/LogoIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { Logo } from "./Logo";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({onClick}: {onClick: (arg: string) =>  void}) {
    return(
        <div className="w-72 h-screen fixed bg-white border-r-3 border-slate-200 rounded-2xl shadow-md">
            <div className="mt-1 mb-4">
                <Logo icon={<LogoIcon size="2xl"/>}/>
            </div>
            <div>
                <div onClick={() => onClick("All Contents")}>
                <SidebarItem text="All Contents" icon={<AllcontentsIcon size="xl"/>}/>
                </div>
                <div onClick={() => onClick("Tweets")}>
                <SidebarItem  text="Tweets" icon={<TwitterIcon size="xl"/>}/>
                </div>
                <div onClick={() => onClick("Videos")}>
                <SidebarItem  text="Videos" icon={<YoutubeIcon size="xl"/>}/>
                </div>
            </div>
        </div>
    )
}