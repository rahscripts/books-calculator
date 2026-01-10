import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <Sidebar />
            <div className="md:ml-64 transition-all duration-300">
                <div className="p-4 md:p-8 max-w-5xl mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
