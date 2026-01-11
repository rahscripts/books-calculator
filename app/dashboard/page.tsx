import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ReadList from "@/app/components/ReadList";
import { getBooks } from "@/app/actions";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const books = await getBooks();

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500">Track your reading progress.</p>
      </div>
      <ReadList initialBooks={books} />
    </>
  );
}
