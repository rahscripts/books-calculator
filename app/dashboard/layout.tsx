import Sidebar from "../components/Sidebar";
import UsernameChecker from "./components/UsernameChecker";
import { getUsername } from "@/app/actions";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const username = await getUsername();

    return (
        <div className="min-h-screen bg-white">
            <UsernameChecker hasUsername={!!username} />
            <Sidebar />
            <div className="md:ml-64 transition-all duration-300">
                <div className="p-4 md:p-8 max-w-5xl mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
