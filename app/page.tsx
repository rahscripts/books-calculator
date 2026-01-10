"use client";

import Link from "next/link";
import Book3D from "./components/landing/Book3D";
import { ArrowRight, Star, Check } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white selection:bg-white selection:text-black overflow-hidden relative">
      {/* Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-40 mix-blend-difference">
        <span className="text-xl font-bold tracking-tight">biblion</span>
        <Link href="/login" className="text-sm font-medium hover:opacity-70 transition-opacity">
          Sign In
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-10 relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              v2.0 Now Live
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Read more.<br />
              <span className="text-neutral-500">Track less.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-400 max-w-md leading-relaxed">
              The minimalist reading tracker for people who actually read.
              No social features. No ads. Just your books.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-4">
              <Link
                href="/login"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-all active:scale-95"
              >
                Start Tracking
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-xs text-neutral-500 font-mono">
                Free forever <br /> for individuals.
              </div>
            </div>
          </div>

          {/* 3D Book */}
          <div className="relative h-[500px] w-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            <Book3D />
          </div>

        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="text-sm font-medium">TRUSTED BY READERS AT</p>
          {["Goodreads", "StoryGraph", "Kindle", "Audible", "Hardcover"].map(brand => (
            <span key={brand} className="text-xl font-serif italic text-white/40">{brand}*</span>
          ))}
        </div>
      </section>

      {/* --- PHILOSOPHY (Embedded View) --- */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">

          <div className="mb-12 text-center md:text-left">
            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">The Philosophy</h2>
            <p className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
              Built for the <span className="text-neutral-500">quiet hours.</span>
            </p>
          </div>

          {/* Embedded View Container */}
          <div className="border border-white/20 rounded-3xl overflow-hidden bg-black relative">

            {/* "Video" Placeholder / Main View */}
            <div className="aspect-video w-full bg-[#050505] relative flex items-center justify-center border-b border-white/10 group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              <div className="text-center space-y-4 z-10">
                <div className="w-16 h-16 mx-auto rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase">App Interface Preview</p>
              </div>
            </div>

            {/* 3 Features (Responsive: Stack on mobile, Row on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#0a0a0a]">

              {[
                { title: "Instant Search", desc: "Google Books API. Zero friction.", icon: "⚡️" },
                { title: "Pure Stats", desc: "Pages read, not likes earned.", icon: "📊" },
                { title: "Showcase", desc: "Share your readlist with anyone.", icon: "🔒" },
              ].map((f, i) => (
                <div key={i} className="p-8 md:p-12 space-y-6 relative group hover:bg-white/[0.02] transition-colors">
                  {/* Squiggle Decoration */}
                  <svg className="w-12 h-6 text-neutral-700" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0 10 Q 12 0, 25 10 T 50 10 T 75 10 T 100 10" />
                  </svg>

                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                      {f.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed text-sm">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* --- BIG REVIEWS (Longer & Deeper, Smaller Text) --- */}
      <section className="py-64 px-6 md:px-12 bg-white text-black selection:bg-black selection:text-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-24">Community Stories</h2>

          <div className="space-y-32">

            {/* Review 1 */}
            <div className="group cursor-default border-b border-neutral-200 pb-16">
              <p className="text-xl md:text-3xl lg:text-5xl font-medium tracking-tight leading-relaxed text-neutral-900 mb-8">
                "I used to track my reading on Goodreads, but the clutter was overwhelming. <span className="text-neutral-400">Biblion is the antidote. It's clean, fast, and remarkably focused."</span>
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-xs">DJ</div>
                <div>
                  <div className="font-bold text-sm">Daniel Jenkins</div>
                  <div className="text-neutral-500 text-xs">Software Engineer</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="group cursor-default border-b border-neutral-200 pb-16">
              <p className="text-xl md:text-3xl lg:text-5xl font-medium tracking-tight leading-relaxed text-neutral-900 mb-8">
                "The 'Pages Read' metric changed how I view my progress. <span className="text-neutral-400">It's a small detail, but the design makes me want to come back every day."</span>
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-xs">ES</div>
                <div>
                  <div className="font-bold text-sm">Elena Soto</div>
                  <div className="text-neutral-500 text-xs">Product Designer</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="group cursor-default">
              <p className="text-xl md:text-3xl lg:text-5xl font-medium tracking-tight leading-relaxed text-neutral-900 mb-8">
                "Finally, a reading app that respects my attention. <span className="text-neutral-400">No ads, no gamification, no social pressure. Just my books."</span>
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-xs">MR</div>
                <div>
                  <div className="font-bold text-sm">Marcus Reed</div>
                  <div className="text-neutral-500 text-xs">Writer</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-6 md:px-12 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">

          <div className="space-y-8">
            <h2 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-none text-neutral-900 select-none">
              biblion
            </h2>
            <p className="text-neutral-500 text-sm">
              Built by <a href="https://x.com/rahscripts" target="_blank" className="font-bold text-white hover:underline decoration-neutral-700 underline-offset-4">@rahscripts</a>
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-neutral-500">
            <Link href="/login" className="hover:text-white transition-colors">Start Tracking</Link>
            <a href="https://x.com/rahscripts" target="_blank" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>

        </div>
      </footer>

    </main>
  );
}
