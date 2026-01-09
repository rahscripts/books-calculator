import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-8">

        {/* Tagline */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          Your Personal Reading Tracker
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-balance">
          Get your username & showcase your readings.
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
          Claim your private link to track your progress and share your library with the world.
        </p>

        {/* CTA */}
        <div className="pt-6">
          <Link
            href="/login"
            className="btn btn-neutral px-8 h-12 min-h-0 rounded-full text-base font-medium tracking-wide"
          >
            Get Started
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-[10px] uppercase tracking-widest text-gray-300 pt-12">
          Simple • Private • Free
        </p>

      </div>
    </main>
  );
}
