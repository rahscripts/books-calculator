'use client';

import { motion, AnimatePresence } from "motion/react";
import { Search, LayoutDashboard, Share2, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const usernames = ["rahscripts", "dev_reads", "bookworm", "literary_king", "reader_01"];

export default function AppFlow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % usernames.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    const steps = [
        {
            icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />,
            title: "1. Build Library",
            desc: "Add books you've read or reading. Covers and page counts are fetched instantly.",
            bg: "bg-emerald-50/30"
        },
        {
            icon: <LayoutDashboard className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />,
            title: "2. Track Progress",
            desc: "A private dashboard to log pages. Real-time bars track every single chapter.",
            bg: "bg-neutral-50/50"
        },
        {
            icon: <Share2 className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />,
            title: "3. Flex & Share",
            desc: "Get your personalized link and showcase your library to the world.",
            bg: "bg-white"
        }
    ];

    return (
        <section className="w-full py-12 max-sm:p-4 md:py-24 relative z-10">
            <div className="w-full max-w-6xl mx-auto px-4">
                <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        The Flow
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic uppercase">
                        Start Reading. <br />
                        <span className="text-emerald-900">Show the world.</span>
                    </h2>
                    <p className="text-neutral-500 text-sm md:text-base font-medium max-w-md mx-auto">
                        How booksofme turns your reading habits into a beautiful public showcase.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
                    {/* Connection Arrows (Desktop) */}
                    <div className="hidden lg:block absolute top-[40%] left-[29%] -translate-y-1/2 z-0">
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <ArrowRight className="w-8 h-8 text-neutral-200" />
                        </motion.div>
                    </div>
                    <div className="hidden lg:block absolute top-[40%] left-[64%] -translate-y-1/2 z-0">
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                        >
                            <ArrowRight className="w-8 h-8 text-neutral-200" />
                        </motion.div>
                    </div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`
                relative py-12 px-8 min-h-[400px] border border-dashed border-neutral-200 shadow-sm
                flex flex-col items-center justify-center text-center space-y-6 transition-all duration-700
                hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 group z-10
                ${step.bg}
              `}
                        >
                            <div className="w-16 h-16 bg-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-dashed border-neutral-100">
                                {step.icon}
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-black tracking-tight italic uppercase text-neutral-900">
                                    {step.title}
                                </h3>
                                <p className="text-neutral-500 text-sm md:text-base font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Special Animation for Step 3 */}
                            {i === 2 ? (
                                <div className="w-full pt-4">
                                    <div className="bg-black p-4 shadow-2xl border border-neutral-800 relative overflow-hidden group/link">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                                        <div className="flex items-center justify-between gap-2 text-[10px] md:text-xs font-mono relative z-10">
                                            <div className="flex items-center gap-1">
                                                <span className="text-neutral-500">booksme.com/</span>
                                                <AnimatePresence mode="wait">
                                                    <motion.span
                                                        key={usernames[index]}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 10 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="font-bold text-emerald-400"
                                                    >
                                                        {usernames[index]}
                                                    </motion.span>
                                                </AnimatePresence>
                                            </div>
                                            <CheckCircle2 className="w-3 h-3 text-emerald-500 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            ) : i === 1 ? (
                                /* Small UI hint for Step 2 */
                                <div className="w-full pt-4">
                                    <div className="w-full h-2 bg-neutral-100 overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["10%", "90%", "40%", "80%"] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="h-full bg-emerald-500"
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="w-12 h-1.5 bg-neutral-100"></div>
                                        <div className="w-8 h-1.5 bg-neutral-100"></div>
                                    </div>
                                </div>
                            ) : (
                                /* Small UI hint for Step 1 */
                                <div className="w-full pt-4 flex gap-2 justify-center">
                                    <div className="w-8 h-10 bg-neutral-100 border-l-2 border-emerald-500 rotate-[-12deg]"></div>
                                    <div className="w-8 h-10 bg-neutral-100 border-l-2 border-emerald-500 rotate-0"></div>
                                    <div className="w-8 h-10 bg-neutral-100 border-l-2 border-emerald-500 rotate-[12deg]"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
