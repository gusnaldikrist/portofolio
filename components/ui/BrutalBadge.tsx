import * as React from "react"
import { cn } from "@/lib/utils"

interface BrutalBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: "primary" | "secondary" | "accent" | "white";
}

const colorMap = {
    primary: "bg-main text-main-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    white: "bg-white text-foreground",
}

export function BrutalBadge({
    className,
    color = "accent",
    children,
    ...props
}: BrutalBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 border-2 border-border font-heading text-xs font-bold whitespace-nowrap",
                colorMap[color],
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}
