"use client";

import { useEffect, useState } from "react";
import { updateProfile, getUserSettings } from "@/app/actions";
import { User, Link as LinkIcon, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function SettingsPage() {
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        image: ""
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        getUserSettings().then((data) => {
            if (data) {
                setFormData({
                    username: data.username || "",
                    name: data.name || "",
                    image: data.image || ""
                });
            }
            setLoading(false);
        });
    }, []);

    const handleSave = async () => {
        setSaving(true);
        setMsg("");

        const cleanUsername = formData.username.trim().toLowerCase().replace(/[^a-z0-9]/g, "");

        const res = await updateProfile({
            username: cleanUsername,
            name: formData.name,
            image: formData.image
        });

        if (res.error) {
            setMsg("❌ " + res.error);
        } else {
            setMsg("✅ Profile updated!");
            setFormData(prev => ({ ...prev, username: cleanUsername }));
        }
        setSaving(false);
    };

    const publicLink = typeof window !== 'undefined' ? `${window.location.origin}/${formData.username}` : `.../${formData.username}`;

    if (loading) return <div className="p-8 text-center text-slate-400 text-sm animate-pulse">Loading settings...</div>;

    return (
        <div className="max-w-2xl mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-xl font-bold tracking-tight">Profile Settings</h2>
                <p className="text-slate-500 text-sm">Manage your public persona and appearance.</p>
            </div>

            <div className="bg-white p-8 border border-slate-100 rounded-3xl shadow-sm space-y-8">

                {/* Display Name */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <User className="w-4 h-4" /> Display Name
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm font-medium placeholder:text-slate-400"
                    />
                </div>

                {/* Username */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <LinkIcon className="w-4 h-4" /> Username
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            placeholder="username"
                            className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm font-medium placeholder:text-slate-400"
                        />
                    </div>
                    <p className="text-[10px] text-slate-400 pl-1">Only lowercase letters and numbers.</p>
                </div>

                {/* Profile Image URL */}
                <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <ImageIcon className="w-4 h-4" /> Profile Image URL
                    </label>
                    <div className="flex gap-4 items-start">
                        <div className="relative w-16 h-16 bg-slate-100 rounded-2xl overflow-hidden shrink-0 border border-slate-200">
                            {formData.image ? (
                                <img src={formData.image} alt="Preview" className="object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-2xl">👤</div>
                            )}
                        </div>
                        <div className="flex-1 space-y-2">
                            <input
                                type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                placeholder="https://example.com/me.jpg"
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm font-medium placeholder:text-slate-400"
                            />
                            <p className="text-[10px] text-slate-400 pl-1"> Paste a direct link to an image (e.g. from Imgur, Discord, etc.)</p>
                        </div>
                    </div>
                </div>


                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    {msg ? <p className="text-sm font-bold text-slate-900 animate-pulse">{msg}</p> : <div></div>}

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 disabled:opacity-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>

            </div>

            {/* Public Link Display */}
            {formData.username && (
                <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between shadow-sm cursor-pointer hover:border-slate-300 transition-colors group" onClick={() => navigator.clipboard.writeText(publicLink)}>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Public Link</div>
                        <a href={`/${formData.username}`} target="_blank" className="font-medium text-blue-600 hover:underline text-sm group-hover:text-blue-700">
                            {publicLink}
                        </a>
                    </div>
                    <span className="text-xs bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-slate-500 font-medium group-hover:bg-slate-100">
                        Copy
                    </span>
                </div>
            )}
        </div>
    );
}
