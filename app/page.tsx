import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginButton from "./components/LoginButton";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Track your reading. Share your progress.
        building Books readList 
        <LoginButton />
      </h1>
    </main>
  );
}
