"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, X, Loader2 } from "lucide-react";
import { checkUsernameAvailability } from "@/app/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UsernameClaim() {
    const [username, setUsername] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "available" | "taken" | "invalid">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (username.length === 0) {
                setStatus("idle");
                return;
            }
            if (username.length < 3) {
                setStatus("invalid");
                setErrorMessage("Too short");
                return;
            }

            setStatus("loading");
            try {
                const result = await checkUsernameAvailability(username);
                if (result.available) {
                    setStatus("available");
                } else {
                    setStatus("taken");
                    setErrorMessage(result.error || "Taken");
                }
            } catch (error) {
                setStatus("invalid");
                setErrorMessage("Error checking");
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [username]);

    return (
        <div className="w-full max-w-[460px] space-y-3">
            {/* Input Container - Flex Row for perfect alignment */}
            <div className={`
                flex items-center px-6 py-5 rounded-2xl bg-white/60 backdrop-blur-xl border transition-all duration-300 shadow-sm
                ${status === 'available' ? 'border-emerald-500/50 ring-4 ring-emerald-500/10' :
                    status === 'taken' ? 'border-rose-500/50 ring-4 ring-rose-500/10' :
                        'border-orange-200 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-500/10'}
            `}>
                <span className="text-black-900/40 font-medium font-mono text-lg md:text-xl shrink-0 select-none">
                    booksofme.in/
                </span>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''));
                    }}
                    placeholder="you"
                    className="flex-1 bg-transparent border-none outline-none font-bold text-lg md:text-xl text-orange-950 placeholder:text-orange-900/20 px-0.5 min-w-0"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />

                {/* Status Indicator Icon */}
                <div className="shrink-0 flex items-center pl-3">
                    {status === "loading" && <Loader2 className="w-5 h-5 text-orange-400 animate-spin" />}
                    {status === "available" && <div className="bg-emerald-100 p-1 rounded-full"><Check className="w-4 h-4 text-emerald-600" /></div>}
                    {status === "taken" && <div className="bg-rose-100 p-1 rounded-full"><X className="w-4 h-4 text-rose-600" /></div>}
                </div>
            </div>

            {/* Helper / Error Text */}
            <div className="h-6 pl-2 flex items-center gap-2 text-sm font-medium">
                {status === "available" && <span className="text-emerald-700 flex items-center gap-2 animate-in fade-in slide-in-from-top-1">Username available</span>}
                {status === "taken" && <span className="text-rose-600 animate-in fade-in slide-in-from-top-1">@{username} is unavailable.</span>}
                {status === "invalid" && username.length > 0 && <span className="text-orange-900/40">{errorMessage}</span>}
                {status === "idle" && <span className="text-orange-900/40">Enter your desired username</span>}
            </div>

            {/* CTA Button */}
            <button
                onClick={() => router.push(`/login?username=${username}`)}
                disabled={status !== 'available'}
                className={`
                    group flex items-center justify-center gap-3 w-full px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 duration-300
                    ${status === 'available'
                        ? 'bg-green-950 text-green-50 shadow-lg shadow-green-900/20 hover:shadow-green-900/30 hover:bg-black'
                        : 'bg-white/50 text-black-900/20 cursor-not-allowed border border-black'}
                            `}
            >
                {status === 'available' ? 'Claim your profile' : 'Claim your link'}
                <ArrowRight className={`w-5 h-5 transition-transform ${status === 'available' ? 'group-hover:translate-x-1' : ''}`} />
            </button>
        </div>
    );
}
