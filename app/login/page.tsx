import { auth } from "@/auth";
import LoginButton from "../components/LoginButton";
import { redirect } from "next/navigation";


export default async function Login() {

    const session = await auth();
    if (session) {
        redirect("/dashboard");
    }
    return (
        <main className="bg-gray-200 min-h-screen items-center flex justify-center">
            <section className="flex flex-col space-y-5 bg-neutral-500 p-20 h-100 items-center rounded-xl rotate-2 justify-center shadow-xl shadow-indigo-500">
                <div className="space-y-4 text-indigo-100">
                    <div className="flex flex-col -space-y-2">
                        <h1 className="text-3xl font-semibold">Share Your ReadList </h1>
                            <h1 className="uppercase max-md:text-3xl text-5xl font-bold block ">with everyone </h1>
                           
                    </div>
                    <p className="italic ">
                        grab one link for your username
                        get a shareable line just for you
                    </p>
                </div>
                <div>
                    <LoginButton />
                </div>
            </section>
        </main>
    )
}