import { cn } from "@/lib/utils";

interface SketchyDividerProps {
    className?: string;
}

export default function SketchyDivider({ className }: SketchyDividerProps) {
    return (
        <div className={cn("w-full py-8 overflow-hidden", className)}>
            <svg
                width="100%"
                height="12"
                viewBox="0 0 1200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="text-emerald-950 opacity-20"
            >
                <path
                    d="M0 6 C 50 4, 100 8, 150 6 C 200 4, 250 8, 300 6 C 350 4, 400 8, 450 6 C 500 4, 550 8, 600 6 C 650 4, 700 8, 750 6 C 800 4, 850 8, 900 6 C 950 4, 1000 8, 1050 6 C 1100 4, 1150 8, 1200 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    fill="none"
                />
            </svg>
        </div>
    );
}
