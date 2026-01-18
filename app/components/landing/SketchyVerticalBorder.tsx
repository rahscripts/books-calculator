import { cn } from "@/lib/utils";

interface SketchyVerticalBorderProps {
    side: "left" | "right";
    className?: string;
}

export default function SketchyVerticalBorder({ side, className }: SketchyVerticalBorderProps) {
    return (
        <div
            className={cn(
                "absolute top-0 bottom-0 w-4 pointer-events-none",
                side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2",
                className
            )}
        >
            <svg
                width="100%"
                height="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-emerald-950 opacity-20"
            >
                <defs>
                    <pattern
                        id={`vertical-sketchy-${side}`}
                        x="0"
                        y="0"
                        width="16"
                        height="150"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M8 0 C 6 25, 10 50, 8 75 C 6 100, 10 125, 8 150"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray="4 6"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#vertical-sketchy-${side})`} />
            </svg>
        </div>
    );
}
