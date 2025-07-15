import type { ReactElement } from "react"

export const Logo = ({icon}: {icon:ReactElement}) => {
    return <div className="flex items-center text-2xl p-3 font-extrabold font-mono">
        {icon} Braindump
    </div>
}