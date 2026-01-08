import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ReadCalculator from "@/app/components/ReadCalculator";
import ReadList from "@/app/components/ReadList";
import UserAccount from "../components/UserAccount";
import LoginButton from "@/app/components/LoginButton";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <section className="max-w-2xl mx-auto p-20 min-h-screen text-center space-y-8">
      <UserAccount session={session}/>
      <Header />
      <ReadCalculator />

      <div className="mt-10">
        <ReadList />
        <Footer />
      </div>
    </section>
  );
}
