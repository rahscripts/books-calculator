import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import LoginButton from "./components/LoginButton";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-6">
        
        {/* Tagline */}
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Building in public
        </p>

        {/* Headline */}
        <h1 className="text-4xl font-semibold leading-tight">
          Track what you read. <br />
          Share your progress.
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed">
          A simple reading tracker that automatically fetches book data,
          tracks your page progress, and gives you a public link
          to share your reading journey.
        </p>

        {/* CTA */}
        <div className="pt-4">
            <LoginButton />
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 pt-6">
          No ads. No noise. Just reading.
        </p>

      </div>
    </main>
  );
}
