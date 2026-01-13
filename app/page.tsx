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
    <main className="h-dvh bg-white text-black selection:bg-black selection:text-white relative overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans">

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
      <section className="min-h-dvh w-full flex flex-col relative snap-center">
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] md:leading-[0.9] text-black max-w-4xl">
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
      <section className="min-h-dvh w-full flex items-center justify-center snap-center p-4 relative z-10 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white border border-neutral-200 rounded-xl shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="h-8 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
                </div>
                {/* Hide URL on very small screens if needed, or truncate */}
                <div className="mx-auto text-[10px] text-neutral-400 font-mono truncate max-w-[200px]">booksofme.com/rahscripts</div>
              </div>

              {/* Main Content: Flex Col on mobile, Row on Desktop */}
              <div className="p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
                {/* User Profile */}
                <div className="flex flex-1 items-center gap-4 shrink-0 self-start md:self-auto">
                  <Image src="/mainlogo.png" alt="profile" width={64} height={64} className="rounded-full w-12 h-12 md:w-16 md:h-16" />
                  <div>
                    <h3 className="font-bold text-lg">M R</h3>
                    <p className="text-sm text-neutral-500">Viewing Portfolio</p>
                  </div>
                </div>

                {/* Iframe Embed */}
                {/* Changed w-300 to w-full md:w-[width] to handle mobile width */}
                <div className="w-full flex-3 md:w-[32rem] h-64 md:h-120 bg-neutral-50 rounded-lg border border-neutral-100 overflow-hidden shadow-inner">
                  <iframe
                    src="https://booksofme.com/rahscripts"
                    className="w-full h-full border-0"
                    title="RahScripts Preview"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
         Section 2.5: Leaderboard Preview
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex items-center justify-center snap-center p-4 relative z-10">
        <LeaderboardPreview />
      </section>

      {/* -----------------------------------------------------------------
         Section 3: Workflow
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex items-center justify-center snap-center bg-neutral-50/50 border-y border-neutral-100 p-4 md:p-8 relative z-10">
        <div className="max-w-6xl mx-auto w-full py-10 md:py-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-md">
              Simple flow for <br />
              <span className="text-emerald-800 opacity-80">serious readers.</span>
            </h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-xs pb-1">
              No social distractions. Just you, your books, and your progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 md:p-8 bg-white border border-neutral-200 rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
              <div className="h-10 w-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-50 transition-colors">
                <Lock className="w-5 h-5 text-neutral-600 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">1. Connect</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Sign in securely with Google. We create your private dashboard instantly. No complicated setup.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 md:p-8 bg-white border border-neutral-200 rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
              <div className="h-10 w-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-50 transition-colors">
                <Search className="w-5 h-5 text-neutral-600 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">2. Track</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Search books via API. Add page counts. Update your progress bar in real-time as you read.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 md:p-8 bg-white border border-neutral-200 rounded-2xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group">
              <div className="h-10 w-10 bg-neutral-100 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-emerald-50 transition-colors">
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
         Section 4: Features
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex items-center justify-center snap-center p-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              Private
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
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

          {/* Graphic Content - Reordered to top on mobile */}
          <div className="order-1 md:order-2 relative bg-neutral-100 rounded-3xl p-8 aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center overflow-hidden border border-neutral-200">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-48 h-52 md:h-64 bg-white rounded-xl shadow-xl border border-neutral-100 rotate-[-6deg] z-10 flex flex-col p-4">
              <div className="w-full h-24 md:h-32 bg-neutral-200 rounded-md mb-3 animate-pulse"></div>
              <div className="w-3/4 h-3 bg-neutral-200 rounded-full mb-2"></div>
              <div className="w-1/2 h-3 bg-neutral-100 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-48 h-52 md:h-64 bg-emerald-900 rounded-xl shadow-2xl rotate-[6deg] z-0"></div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------
         Section 5: CTA & Footer
         ------------------------------------------------------------------ */}
      <section className="min-h-dvh w-full flex flex-col items-center justify-center snap-center relative z-10">
        <div className="flex-1 flex flex-col items-center justify-center w-full px-4">
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Start your library today.
            </h2>
            <p className="text-neutral-500 text-base md:text-lg">
              Join the community of readers tracking their journey.
            </p>
            <Link href="/login" className="group flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-all hover:pr-6 hover:pl-10 duration-300">
              Create Free Account
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