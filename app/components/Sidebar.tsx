"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import UserAccount from "./UserAccount";

import { LayoutDashboard, Settings, Coffee, LogOut } from "lucide-react";

const Sidebar = () => {
    const pathname = usePathname();

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Support", href: "/dashboard/support", icon: Coffee },
         { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ];

    return (
        <aside className="lg:fixed left-0 top-0 h-full w-64 bg-white md:border-r max-md:items-center max-md:justify-center border-slate-200  md:flex flex-col z-50">
            <div className="p-8 pb-4">
                <h1 className="text-xl font-bold tracking-tight">biblion</h1>
            </div>

            <nav className="flex-1 max-md:flex px-4 space-y-1">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                ? "bg-slate-900 text-white font-medium shadow-lg shadow-slate-200"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
               
                <button
                    onClick={() => signOut()}
                    className="flex cursor-pointer items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-500 max-md:hidden hover:bg-red-50 rounded-xl transition-all text-sm font-medium"
                >
                    <LogOut className="w-5 h-5" />
                    
                    Sign Out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
