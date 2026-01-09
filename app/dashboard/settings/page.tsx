"use client";

import { useEffect, useState } from "react";
import { updateUsername, getUserSettings } from "@/app/actions";

export default function SettingsPage() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        getUserSettings().then((data) => {
            if (data?.username) setUsername(data.username);
            setLoading(false);
        });
    }, []);

    const handleSave = async () => {
        if (!username) return;
        setSaving(true);
        setMsg("");

        // Basic formatting
        const clean = username.trim().toLowerCase().replace(/[^a-z0-9]/g, "");

        const res = await updateUsername(clean);
        if (res.error) {
            setMsg("❌ " + res.error);
        } else {
            setMsg("✅ Username updated!");
            setUsername(clean);
        }
        setSaving(false);
    };

    const publicLink = typeof window !== 'undefined' ? `${window.location.origin}/${username}` : `.../${username}`;

    if (loading) return <div>Loading settings...</div>;

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div>
                <h2 className="text-2xl font-bold">Profile Settings</h2>
                <p className="text-gray-500">Manage your public profile information.</p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-2xl space-y-6">

                {/* Username Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Username</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="yourname"
                            className="flex-1 p-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-slate-900"
                        />
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save"}
                        </button>
                    </div>
                    <p className="text-xs text-slate-400">Only lowercase letters and numbers.</p>
                    {msg && <p className="text-sm font-medium">{msg}</p>}
                </div>

                {/* Public Link Display */}
                {username && (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                        <div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Your Public Link</div>
                            <a href={`/${username}`} target="_blank" className="font-medium text-blue-600 hover:underline">
                                {publicLink}
                            </a>
                        </div>
                        <button
                            onClick={() => navigator.clipboard.writeText(publicLink)}
                            className="text-xs bg-white border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-100"
                        >
                            Copy
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
