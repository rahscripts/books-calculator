import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginButton from "../components/LoginButton";
import Link from "next/link";

export default async function LoginPage() {
    const session = await auth();

    if (session) {
        redirect("/dashboard");
    }

    return (
        <main className="min-h-screen w-full flex">
            {/* LEFT — VISUAL / BRANDING (Dark Mode Aesthetic) */}
            <div className="hidden lg:flex w-1/2 bg-neutral-950 relative overflow-hidden flex-col justify-between p-16 text-white">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950 to-neutral-950 pointer-events-none" />

                {/* Logo Area */}
                <div className="relative z-10">
                    <Link href={"/"} className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
                        <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                            {/* Inverted Logo placeholder */}
                            <img src="/logo.png" alt="" className="w-5 h-5 " />
                        </div>
                        <span className="text-lg font-medium tracking-tight">booksofme</span>
                    </Link>
                </div>

                {/* Main Copy */}
                <div className="relative z-10 space-y-8 max-w-md">
                    <h2 className="text-4xl font-serif leading-tight text-neutral-200">
                        "A room without books is like a body without a soul."
                    </h2>

                    <div className="space-y-4">
                        <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest">
                            The Modern Bookshelf
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Curate your digital library",
                                "Track reading progress elegantly",
                                "Share your profile with one link"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-300 font-light">
                                    <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="relative z-10 text-xs text-neutral-600 font-medium tracking-wider uppercase">
                    © {new Date().getFullYear()} Booksofme Inc.
                </div>
            </div>

            {/* RIGHT — AUTHENTICATION (Clean Minimalist) */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-8 lg:p-24 relative">
                {/* Mobile Logo (Only visible on small screens) */}
                <div className="absolute top-8 left-8 lg:hidden">
                    <Link href={"/"} className="flex items-center gap-2">
                        <img src="/logo.png" alt="" className="w-6 h-6 object-contain" />
                        <span className="font-bold tracking-tight text-neutral-900">booksofme</span>
                    </Link>
                </div>

                <div className="w-full max-w-sm space-y-10">
                    <div className="space-y-2 text-center lg:text-left">
                        <h1 className="text-3xl lg:text-4xl font-bold tracking-tighter text-neutral-950">
                            Access your dashboard
                        </h1>
                        <p className="text-neutral-500 text-sm lg:text-base">
                            Sign in to manage your work and progress.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* We wrap the button to control its width/style from the parent if needed */}
                        <div className="flex flex-col gap-4">
                            <LoginButton />
                        </div>

                        <p className="text-center text-xs text-neutral-400 mt-6">
                            By clicking continue, you agree to our{" "}
                            <Link href="/terms" className="underline underline-offset-4 hover:text-neutral-900 transition-colors">
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="underline underline-offset-4 hover:text-neutral-900 transition-colors">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}