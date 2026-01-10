"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserSettings } from "@/app/actions";
import { LayoutDashboard, UserPenIcon, Coffee, LogOut, User as UserIcon } from "lucide-react";

const Sidebar = () => {
    const pathname = usePathname();
    const [user, setUser] = useState<{ name?: string; image?: string; username?: string } | null>(null);

    useEffect(() => {
        getUserSettings().then((data) => {
            if (data) setUser(data);
        });
    }, []);

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Support", href: "/dashboard/support", icon: Coffee },
        { name: "Profile", href: "/dashboard/profile", icon: UserPenIcon },
    ];

    return (
        <aside className="md:fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 flex flex-col z-50 
            max-md:w-full max-md:h-auto max-md:border-b max-md:flex-row max-md:items-center max-md:justify-between max-md:p-4 max-md:sticky max-md:top-0">
            <Link href={"/dashboard"}>
                <div className="p-8 w-fit pb-4 max-md:p-0">

                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="" className="w-5 h-5 object-contain" />
                        <span className="text-xl font-bold tracking-tight">booksofme</span>
                    </div>

                </div>
            </Link>

            <nav className="flex-1 px-4 space-y-1 max-md:flex max-md:space-y-0 max-md:px-0 max-md:gap-1 max-md:items-center max-md:justify-center">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                ? "bg-neutral-900 text-white font-medium shadow-lg shadow-slate-200"
                                : "text-slate-500 hover:bg-neutral-50 hover:text-slate-900"
                                } max-md:p-2 max-md:rounded-lg`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="max-md:hidden">{link.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100 max-md:hidden">
                <div className="relative group h-14 w-full overflow-hidden rounded-xl bg-neutral-50 border border-slate-100 cursor-pointer">

                    {/* User Profile (Default View) */}
                    <div className="absolute inset-0 flex items-center gap-3 px-3 transition-transform duration-300 group-hover:-translate-y-full">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                            {user?.image ? (
                                <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <UserIcon className="w-4 h-4 text-slate-400" />
                            )}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-slate-800 truncate">
                                {user?.name || "User"}
                            </p>
                            <p className="text-[10px] text-slate-500 truncate">
                                @{user?.username || "reader"}
                            </p>
                        </div>
                    </div>

                    {/* Sign Out (Hover View) */}
                    <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="absolute inset-0 flex items-center justify-center gap-2 bg-red-50 text-red-600 cursor-pointer font-bold text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-red-100"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>

                </div>
            </div>

            {/* Mobile Sign Out (Icon Only) */}
            <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="hidden max-md:flex p-2 text-slate-500 hover:text-red-500"
            >
                <LogOut className="w-5 h-5" />
            </button>
        </aside>
    );
};

export default Sidebar;
