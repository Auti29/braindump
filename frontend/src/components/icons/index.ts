

export interface IconProps{
    size: "sm" | 'md' | 'lg' | 'xl' | '2xl'; 
}

export const iconSize: Record<IconProps["size"], string> = {
    "sm": "w-2 h-2", 
    "md": "w-4 h-4", 
    "lg": "w-5 h-5", 
    "xl": "w-7 h-7", 
    "2xl": "w-10 h-10"
}