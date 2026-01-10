"use client";
import Footer from "@/app/components/Footer";

import { Coffee, Heart, Star } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {



    return (
        <div className="max-w-2xl mx-auto pt-8 pb-20">

            <div className="text-center space-y-4 mb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider border border-yellow-200">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    Community Support
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    Keep the Tracker Alive.
                </h1>
                <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
                    booksofme is free and open. If it helps you read more, consider fueling my next coding session.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

                {/* Coffee Card */}
                <div className="bg-[#FFDD00] p-8 rounded-3xl relative overflow-hidden group transition-transform  shadow-xl shadow-yellow-100">
                    <div className="absolute top-0 right-0 -m-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Coffee className="w-48 h-48" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
                        <div>
                            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mb-4">
                                <Coffee className="w-6 h-6 text-yellow-900" />
                            </div>
                            <h3 className="text-xl font-bold text-yellow-900">Buy me a Coffee</h3>
                            <p className="text-yellow-800/80 text-sm mt-2 font-medium">
                                Small contribution, big impact. Helps cover server costs.
                            </p>
                        </div>
                        <Link
                            target="_blank"
                            href="https://buymeacoffee.com/rahscripts"
                            className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-yellow-900 cursor-pointer font-semibold rounded-xl shadow-sm hover:bg-yellow-50 transition-colors"
                        >
                            Buy me a Coffee
                        </Link>
                    </div>
                </div>

                {/* Share Card */}
                <div className="bg-red-100 border border-slate-200 p-8 rounded-3xl relative overflow-hidden group hover:border-slate-200 transition-colors shadow-sm">
                    <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
                        <div>
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Share the Love</h3>
                            <p className="text-slate-500 text-sm mt-2 font-medium">
                                Can&apos;t donate? No worries! Sharing this tool with your friends implies the world to me.
                            </p>
                        </div>
                        <Link href={"https://x.com/rahscripts"}>
                            <button
                                className="inline-flex cursor-pointer items-center justify-center gap-2 w-full py-4 bg-neutral-900 text-white font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
                            >
                                Share
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="mt-12 text-center">

                <p className="text-xs text-slate-400 font-medium">
                    Built by <a href="https://x.com/rahscripts" target="_blank" className="underline hover:text-slate-600">@rahscripts</a> with ❤️ and Next.js
                </p>

            </div>

        </div>
    );
}
