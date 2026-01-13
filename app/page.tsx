import Link from "next/link";
import { BookOpen, Share2, Search, Lock, BarChart3, ArrowRight } from "lucide-react";
import UsernameClaim from "./components/landing/UsernameClaim";
import LeaderboardPreview from "./components/landing/LeaderboardPreview";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    // changed h-screen to h-dvh for better mobile browser support
    <main className="h-dvh bg-white text-black selection:bg-black selection:text-white relative overflow-y-scroll scroll-smooth font-sans">

      {/* -----------------------------------------------------------------
         Global Background Elements (Fixed)
         ------------------------------------------------------------------ */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
      {/* Adjusted blur and size for mobile performance/visuals */}
      <div className="fixed top-[-20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0 mix-blend-multiply"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neutral-200/50 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* -----------------------------------------------------------------
         Section 1: Hero (Nav + Content)
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex flex-col relative">
        {/* Nav: Reduced padding on mobile */}
        <nav className="w-full p-4 md:p-10 flex justify-between items-center z-50 absolute top-0 left-0 right-0">
          <Link href={"/"}>
            <div className="p-2 w-fit max-md:p-0">
              <div className="flex items-center gap-2 group cursor-pointer">
                {/* Assuming logo is in public folder */}
                <img src="/logo.png" alt="logo" className="w-5 h-5" />
                <span className="text-xl font-bold tracking-tight group-hover:opacity-70 transition-opacity">
                  booksofme
                </span>
              </div>
            </div>
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-neutral-500 hover:text-black transition-colors px-4 py-2 rounded-full hover:bg-neutral-100"
          >
            Sign In
          </Link>
        </nav>

        {/* Hero Content Centered */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold uppercase tracking-wider text-neutral-600 hover:border-emerald-500/30 transition-colors cursor-default">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Live Now
            </div>

            {/* Responsive Text Sizes */}
            <div><a href="https://www.producthunt.com/products/booksofme?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-booksofme" target="_blank" rel="noopener noreferrer"><img alt="booksofme -   try booksofme and show-off your readings. | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1060917&amp;theme=light&amp;t=1768152251511" /></a></div>
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black tracking-tighter leading-[0.8] md:leading-[0.8] text-black max-w-4xl italic uppercase decoration-emerald-500/30">
              Showcase your <br className="hidden md:block" />
              <span className="text-emerald-900 selection:bg-emerald-200">reading journey.</span>
            </h1>

            <p className="text-base md:text-xl text-neutral-500 max-w-[90%] md:max-w-lg leading-relaxed font-medium">
              Your personal library, beautifully organized. <br className="hidden md:block" />
              Claim your username and start tracking.
            </p>

            <div className="w-full flex justify-center pt-2 md:pt-4">
              <UsernameClaim />
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
         Section 2: Mock UI Preview
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex items-center justify-center p-4 relative z-10 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto py-20 flex flex-col items-center">

          <div className="text-center space-y-4 mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              Shareable Showcases
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic uppercase">
              Show-off your <br />
              <span className="text-emerald-900">Reading Journey.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base font-medium leading-relaxed">
              Your books, beautifully organized in a single shareable link.
            </p>
          </div>

          <div className="w-full space-y-8 flex flex-col items-center">

            {/* Mockup Box - Only Iframe */}
            <div className="w-full relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-[2.5rem] blur-3xl -z-10"></div>
              <div className="relative bg-white border border-neutral-200 rounded-xl md:rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-700 group-hover:shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)]">
                {/* Browser Header */}
                <div className="h-10 border-b border-neutral-100 flex items-center px-6 gap-3 bg-neutral-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-[10px] text-neutral-400 font-mono tracking-tight bg-white px-3 py-0.5 rounded-full border border-neutral-100 cursor-pointer hover:bg-neutral-100 transition-colors">
                    <Link href={"https://booksofme.com/rahscripts"} target="_blank">booksofme.com/rahscripts</Link>
                  </div>
                </div>

                {/* Iframe only */}
                <div className="w-full aspect-[4/3] md:aspect-video bg-neutral-50 overflow-hidden relative">
                  <iframe
                    src="https://booksofme.com/rahscripts"
                    className="w-full h-full border-0"
                    title="RahScripts Preview"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Floating Link Reminder */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl z-20 whitespace-nowrap">
                Showcase Link: /rahscripts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
         Section 2.5: Leaderboard Preview
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex items-center justify-center p-4 relative z-10">
        <LeaderboardPreview />
      </section>
      {/* -----------------------------------------------------------------
         Section 5: CTA & Footer
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex flex-col items-center justify-center relative z-10">
        <div className="flex-1 flex flex-col items-center justify-center w-full px-4">
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none italic uppercase">
              Start your <br /> library today.
            </h2>
            <p className="text-neutral-500 text-base md:text-lg">
              Join the community of readers tracking their journey.
            </p>
            <Link href="/login" className="group flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-all hover:pr-6 hover:pl-10 duration-300">
              claim your username
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-neutral-200 bg-white z-20">
          <div className="mx-auto max-w-6xl px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 tracking-wide">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span className="font-bold text-black tracking-tight">booksofme © {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/terms" className="hover:text-black transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-black transition-colors">Privacy</a>
              <a href="mailto:support@booksofme.com" className="hover:text-black transition-colors">Contact</a>
            </div>

          </div>
        </footer>

      </section>

    </main>
  );
}