import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ReadCalculator from "@/app/components/ReadCalculator";
import ReadList from "@/app/components/ReadList";
import LoginButton from "@/app/components/LoginButton";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <section className="max-w-2xl mx-auto p-20 min-h-screen text-center space-y-8">
        <div> hey <span className="bg-red-100 text-neutral-900 p-1 font-semibold tracking-wider">{(session?.user?.name)?.split(" ")[1]}</span>👋🏻📚</div>
      <Header />
      <ReadCalculator />

      <div className="mt-10">
        <ReadList />
        <Footer />
      </div>
    </section>
  );
}
