import Link from "next/link";
import { ArrowLeft, UserX } from "lucide-react";

export default function UserNotFound() {
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

                {/* Visual Icon */}
                <div className="relative flex justify-center">
                    <div className="w-24 h-24 bg-neutral-50 rounded-full border border-neutral-100 flex items-center justify-center shadow-sm">
                        <UserX className="w-10 h-10 text-neutral-300" />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-neutral-950">
                        user id not on <br />
                        <Link href="/dashboard"><span className="text-emerald-900 underline decoration-emerald-500/20">booksofme</span></Link>
                    </h2>
                    <p className="text-neutral-500 text-lg leading-relaxed font-medium">
                        The shelf you are looking for doesn't exist yet, or the user hasn't claimed this space.
                    </p>
                </div>

                {/* Action */}
                <div className="pt-4">
                    <Link
                        href="/dashboard"
                        className="group inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-900 transition-all hover:pl-6 hover:pr-10 duration-300 italic"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Return to Dashboard
                    </Link>
                </div>

            </div>

        </main>
    );
}
