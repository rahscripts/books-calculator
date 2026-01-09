"use client";

import Image from "next/image";
import { User } from "next-auth";
import { useEffect, useState } from "react";
import { getUserSettings } from "@/app/actions";

type Sprops = {
    session: { user?: User } | null,
}
const UserAccount = ({ session }: Sprops) => {
    const [profile, setProfile] = useState<{ name?: string | null, image?: string | null }>({
        name: session?.user?.name,
        image: session?.user?.image
    });

    useEffect(() => {
        if (!session?.user?.email) return;
        getUserSettings().then(data => {
            if (data) {
                setProfile({
                    name: data.name || session?.user?.name,
                    image: data.image || session?.user?.image
                });
            }
        });
    }, [session]);

    return (
        <div className="flex gap-3 items-center justify-center">
            <div className="avatar">
                <div className="relative ring-slate-100 w-10 h-10 rounded-full ring-2 overflow-hidden bg-slate-50">
                    {profile.image ? (
                        <img src={profile.image} alt={profile.name || "User"} className="object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-lg">👤</div>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className="font-bold text-sm text-slate-800">{profile.name}</div>
                <div className="text-[10px] tracking-widest text-slate-400 font-medium uppercase">Pro Plan</div>
            </div>
        </div>
    )
}

export default UserAccount;