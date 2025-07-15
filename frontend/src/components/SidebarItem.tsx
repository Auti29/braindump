import type { ReactElement } from "react";


export function SidebarItem({text, icon}:{text: string, icon: ReactElement}) {
    return <div className="flex text-lg text-slate-600 font-bold pl-7 pt-3 pb-3 hover:bg-slate-200 cursor-pointer ">
        {icon} {text}
    </div>
}