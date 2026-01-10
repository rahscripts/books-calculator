import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Connect",
            description: "Sign in with Google to create your private library.",
            detail: "Secure & Instant",
        },
        {
            step: "02",
            title: "Track",
            description: "Add books, update pages, and log your journey.",
            detail: "Private Dashboard",
        },
        {
            step: "03",
            title: "Share",
            description: "Get your unique link to showcase your progress.",
            detail: "Public /username",
        },
    ];

    return (
        <section className="w-full py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((item, i) => (
                        <div
                            key={i}
                            className="group flex flex-col space-y-4 p-6 rounded-2xl border border-neutral-200 bg-white/50 backdrop-blur-sm hover:border-neutral-300 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-4xl font-bold text-neutral-200 group-hover:text-emerald-500/20 transition-colors">
                                    {item.step}
                                </span>
                                <span className="px-2 py-1 rounded-md bg-neutral-100 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                                    {item.detail}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visual Flow Indicator for Desktop */}
                <div className="hidden md:flex justify-center mt-12 opacity-30">
                    <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10H199M199 10L190 1M199 10L190 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
    );
}