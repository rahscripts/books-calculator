import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginButton from "../components/LoginButton";

export default async function LoginPage() {
    const session = await auth();

    if (session) {
        redirect("/dashboard");
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-6 pt-24">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter">Welcome Back</h1>
                    <p className="text-gray-500 text-sm tracking-wide upppercase">Sign in to continue your reading journey</p>
                </div>
                <div className="flex justify-center">
                    <LoginButton />
                </div>
            </div>
        </main>
    );
}
