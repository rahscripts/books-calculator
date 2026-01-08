import { auth } from "@/auth";
import LoginButton from "../components/LoginButton";
import { redirect } from "next/navigation";


export default async function Login() {

    const session = await auth();
    if (session) {
        redirect("/dashboard");
    }
    return (
        <main className="bg-red-200 min-h-screen">
            <section>
                
                <LoginButton />
            </section>
        </main>
    )
}