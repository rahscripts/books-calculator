import Link from "next/link";
import { BookOpen, Share2, Search, Lock, BarChart3, ArrowRight } from "lucide-react";
import UsernameClaim from "./components/landing/UsernameClaim";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col relative overflow-hidden font-sans">

      {/* -----------------------------------------------------------------
         Global Background Elements
         ------------------------------------------------------------------ */}
      {/* Noise Texture */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

      {/* Subtle Gradient Spotlights */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-multiply"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neutral-200/50 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* -----------------------------------------------------------------
         Navigation
         ------------------------------------------------------------------ */}
      <nav className="w-full p-6 md:p-10 flex justify-between items-center z-50 relative">
        <Link href={"/"}>
          <div className="p-2 w-fit max-md:p-0">
            <div className="flex items-center gap-2 group cursor-pointer">
              {/* Logo Placeholder */}
              <div className="w-5 h-5 bg-neutral-900 rounded-sm flex items-center justify-center text-white text-[10px] font-bold">
                B
              </div>
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

      {/* -----------------------------------------------------------------
         Hero Section
         ------------------------------------------------------------------ */}
      <div className="flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 z-10 pt-10 pb-24 md:pt-20 md:pb-32">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold uppercase tracking-wider text-neutral-600 hover:border-emerald-500/30 transition-colors cursor-default">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Live Now
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9] text-black max-w-4xl">
            Showcase your <br className="hidden md:block" />
            <span className="text-emerald-900 selection:bg-emerald-200">reading journey.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-neutral-500 max-w-lg leading-relaxed font-medium">
            Your personal library, beautifully organized. <br className="hidden md:block" />
            Claim your username and start tracking.
          </p>

          {/* Input Component */}
          <div className="w-full flex justify-center pt-4">
            <UsernameClaim />
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------
         Mock UI Preview (Visual Break)
         ------------------------------------------------------------------ */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-32 z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-white border border-neutral-200 rounded-xl shadow-2xl overflow-hidden">
            {/* Browser Mockup Header */}
            <div className="h-8 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
              </div>
              <div className="mx-auto text-[10px] text-neutral-400 font-mono">booksofme.com/johndoe</div>
            </div>

            {/* Content Mockup */}
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center text-xl font-bold text-neutral-400">JD</div>
                <div>
                  <h3 className="font-bold text-lg">John Doe</h3>
                  <p className="text-sm text-neutral-500">Reading 'Atomic Habits'</p>
                </div>
              </div>

              {/* Progress Bar Mock */}
              <div className="w-full max-w-xs space-y-2">
                <div className="flex justify-between text-xs font-medium text-neutral-500">
                  <span>Current Progress</span>
                  <span className="text-emerald-600">62%</span>
                </div>
                <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full w-[62%] bg-neutral-800 rounded-full"></div>
                </div>
                <p className="text-[10px] text-neutral-400 text-right">Updated 2h ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------
         Workflow Section (How it Works)
         ------------------------------------------------------------------ */}
      <section className="w-full py-12 md:py-24 px-4 z-10 bg-neutral-50/50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-md">
              Simple flow for <br />
              <span className="text-emerald-800 opacity-80">serious readers.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-xs pb-1">
              No social distractions. Just you, your books, and your progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Step 1 */}
            <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
              <div className="h-10 w-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                <Lock className="w-5 h-5 text-neutral-600 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">1. Connect</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Sign in securely with Google. We create your private dashboard instantly. No complicated setup.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
              <div className="h-10 w-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                <Search className="w-5 h-5 text-neutral-600 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">2. Track</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Search books via API. Add page counts. Update your progress bar in real-time as you read.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
              <div className="h-10 w-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                <Share2 className="w-5 h-5 text-neutral-600 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">3. Share</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Your profile is generated at <span className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">/username</span>. Share your link; visitors view without logging in.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
         Privacy vs Public Feature Split
         ------------------------------------------------------------------ */}
      <section className="w-full py-24 px-4 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Private Dashboard Text */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              Private
            </div>
            <h3 className="text-4xl font-bold tracking-tight">
              A dashboard built <br /> for your habits.
            </h3>
            <ul className="space-y-4 pt-4">
              {[
                "Search global book database",
                "Auto-fetch page counts & covers",
                "Log daily reading sessions",
                "Secure data encryption"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-600 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual Representation */}
          <div className="relative bg-neutral-100 rounded-3xl p-8 aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center overflow-hidden border border-neutral-200">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            {/* Abstract Cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-white rounded-xl shadow-xl border border-neutral-100 rotate-[-6deg] z-10 flex flex-col p-4">
              <div className="w-full h-32 bg-neutral-200 rounded-md mb-3 animate-pulse"></div>
              <div className="w-3/4 h-3 bg-neutral-200 rounded-full mb-2"></div>
              <div className="w-1/2 h-3 bg-neutral-100 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-emerald-900 rounded-xl shadow-2xl rotate-[6deg] z-0"></div>
          </div>

        </div>
      </section>

      {/* -----------------------------------------------------------------
         CTA
         ------------------------------------------------------------------ */}
      <section className="w-full py-24 z-10 text-center px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Start your library today.
          </h2>
          <p className="text-neutral-500 text-lg">
            Join the community of readers tracking their journey.
          </p>
          <Link href="/login" className="group flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-all hover:pr-6 hover:pl-10 duration-300">
            Create Free Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* -----------------------------------------------------------------
         Footer
         ------------------------------------------------------------------ */}
      <footer className="w-full border-t border-neutral-200 bg-white z-20 relative">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 tracking-wide">

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

    </main>
  );
}