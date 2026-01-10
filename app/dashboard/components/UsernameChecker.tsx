"use client";

import { useEffect, useState } from "react";
import { updateProfile } from "@/app/actions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UsernameChecker({ hasUsername }: { hasUsername: boolean }) {
    const [checked, setChecked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (hasUsername || checked) return;

        const checkCookies = async () => {
            setChecked(true);

            // 1. Check for claimed username cookie
            const getCookie = (name: string) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop()?.split(';').shift();
            }

            const claimedUsername = getCookie("claimed_username");

            if (claimedUsername) {
                // Try to claim it
                const res = await updateProfile({ username: claimedUsername });

                // Clear cookie
                document.cookie = "claimed_username=; path=/; max-age=0";

                if (res.error) {
                    toast.error(`Username '${claimedUsername}' was taken. Please pick another!`);
                    router.push("/dashboard/profile");
                } else {
                    toast.success(`Welcome! Your username '${claimedUsername}' has been claimed. 🎉`, {
                        duration: 5000,
                        icon: '🚀',
                    });
                    setTimeout(() => router.refresh(), 1000);
                }
            } else {
                // No claimed username, but user has no username set
                toast("Welcome! Pick a username to start your journey ✨", {
                    duration: 6000,
                    icon: '👋',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                router.push("/dashboard/profile");
            }
        };

        // Small delay to ensure hydration
        setTimeout(checkCookies, 500);

    }, [hasUsername, checked, router]);

    return null; // Invisible component
}
