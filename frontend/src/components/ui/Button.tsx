import type { ReactElement } from "react";

interface ButtonProps{
    variant : "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon: ReactElement;
    endIcon?: string;
    onClick?: () => void;
}


const variantStyles: Record<ButtonProps["variant"], string>= {
    "primary": "bg-purple-600    text-white", 
    "secondary": "bg-purple-400 text-purple-500"
}

const sizeStyles: Record<ButtonProps["size"], string> = {
    "sm": "py-1 px-2", 
    "md": "py-2 px-5", 
    "lg": "py-4 px-6", 
}

export const Button = (props: ButtonProps) => {
    return (
        <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} flex justify-center align-middle rounded-md`}>{props.startIcon ? <div className="pr-2 pt-1">{props.startIcon}</div> : null}{props.text}{props.endIcon? <div className="pl-2 pt-1">{props.endIcon}</div>: null}</button>
    )
}