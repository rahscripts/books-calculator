import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col items-center justify-center relative overflow-hidden font-sans p-6">

            {/* -----------------------------------------------------------------
         Global Background Elements
         ------------------------------------------------------------------ */}
            <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
            <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-multiply"></div>
            <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neutral-200/50 blur-[120px] rounded-full pointer-events-none z-0"></div>

            {/* -----------------------------------------------------------------
         Content
         ------------------------------------------------------------------ */}
            <div className="relative z-10 text-center space-y-8 max-w-lg">

                {/* Large 404 */}
                <div className="relative">
                    <h1 className="text-9xl font-bold tracking-tighter text-neutral-100 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold tracking-tight bg-white px-4 py-1 rounded-full border border-neutral-100 shadow-sm">
                            Page not found
                        </span>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Missing from the library.
                    </h2>
                    <p className="text-neutral-500 text-lg leading-relaxed">
                        The chapter you are looking for hasn't been written yet, or it has been moved to another shelf.
                    </p>
                </div>

                {/* Action */}
                <div className="pt-4">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-all hover:pl-6 hover:pr-10 duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Return Home
                    </Link>
                </div>

            </div>

        </main>
    );
}
