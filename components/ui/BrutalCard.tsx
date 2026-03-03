import * as React from "react"
import { cn } from "@/lib/utils"

interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: "white" | "primary" | "secondary" | "accent" | "muted";
}

const colorMap = {
    white: "bg-white",
    primary: "bg-main",
    secondary: "bg-secondary",
    accent: "bg-accent",
    muted: "bg-muted",
}

export function BrutalCard({
    className,
    color = "white",
    children,
    ...props
}: BrutalCardProps) {
    return (
        <div
            className={cn(
                "border-4 border-border brutal-shadow rounded-none",
                colorMap[color],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
