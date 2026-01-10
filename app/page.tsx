import Link from "next/link";
import UsernameClaim from "./components/landing/UsernameClaim";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col relative overflow-hidden font-sans">

      {/* Noise - Subtle */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

      {/* Nav */}
      <nav className="w-full p-6 md:p-10 flex justify-between items-center z-50">
        <Link href={"/"}>
          <div className="p-2 w-fit pb-4 max-md:p-0">

            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="" className="w-5 h-5 object-contain" />
              <span className="text-xl font-bold tracking-tight">booksofme</span>
            </div>

          </div>
        </Link>
        <Link href="/login" className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">
          Sign In
        </Link>
      </nav>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 z-10 -mt-20">

        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Live Now
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-black max-w-4xl">
            Showcase your <br className="hidden md:block" />
            <span className="text-green-800">reading journey.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed font-medium">
            Your personal library, beautifully organized. <br className="hidden md:block" />
            Claim your username and start tracking.
          </p>

          <div className="w-full flex justify-center pt-2">
            <UsernameClaim />
          </div>
        </div>

      </div>

      {/* Footer - Minimal */}
      <footer className="w-full p-8 flex justify-center gap-6 text-sm font-medium text-neutral-400 z-50">
        <Link href="/login" className="hover:text-black transition-colors">Start</Link>
        <span className="text-neutral-200">/</span>
        <a href="https://x.com/rahscripts" target="_blank" className="hover:text-black transition-colors">Twitter</a>
        <span className="text-neutral-200">/</span>
        <a href="/terms" className="hover:text-black transition-colors">Terms</a>
      </footer>

    </main>
  );
}
