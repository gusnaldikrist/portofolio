import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}

export function TimelineItem({
    className,
    isActive = false,
    children,
    ...props
}: TimelineItemProps) {
    return (
        <div className={cn("relative pl-8 md:pl-12 pb-12 last:pb-0", className)} {...props}>
            {/* Vertical line connecting timeline items */}
            <div
                className={cn(
                    "absolute left-[11px] top-4 h-full w-1",
                    isActive ? "bg-main" : "bg-border"
                )}
            />
            {/* Node / marker on the timeline */}
            <div
                className={cn(
                    "absolute left-0 top-1 h-6 w-6 rounded-none border-4 border-border brutal-shadow flex items-center justify-center",
                    isActive ? "bg-main" : "bg-white"
                )}
            >
                <div className="h-2 w-2 rounded-none bg-border" />
            </div>

            {/* Timeline item content */}
            <div className="pt-0">
                {children}
            </div>
        </div>
    )
}
