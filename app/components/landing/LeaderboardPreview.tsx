import { getLeaderboard } from "@/app/actions";
import { Crown, Medal, BookOpen, User as UserIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function LeaderboardPreview() {
    const topUsers = await getLeaderboard(5); // Fetch top 5 for the new list view

    if (topUsers.length === 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-15">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        Top Performers
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic uppercase">
                        The Reading <br />
                        <span className="text-emerald-900">Hall of Fame</span>
                    </h2>
                </div>
                <p className="text-neutral-500 text-sm md:text-base max-w-[280px] font-medium leading-relaxed">
                    The top readers in our community, proving that consistency is the only way forward.
                </p>
            </div>

            <div className="space-y-3">
                {topUsers.map((user, index) => {
                    const rank = index + 1;
                    return (
                        <Link
                            key={user.id}
                            href={`/${user.username}`}
                            className="flex items-center justify-between p-4 md:p-4 bg-white border border-neutral-300 rounded-3xl hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group relative overflow-hidden active:scale-[0.98]"
                        >
                            {/* Background Accent */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/50 transition-all duration-500 -z-0"></div>

                            <div className="flex items-center gap-4 md:gap-8 relative z-10">
                                {/* Rank Number */}
                                <div className="w-6 md:w-8 flex justify-center text-xl md:text-2xl font-black text-neutral-300 italic group-hover:text-emerald-500 transition-colors">
                                    {rank === 1 ? <Crown className="w-6 h-6 text-yellow-500 fill-yellow-500" /> : rank}
                                </div>

                                {/* Avatar */}
                                <div className="relative shrink-0">
                                    <div className={`
                    w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 flex items-center justify-center bg-neutral-50 transition-all duration-500
                    ${rank === 1 ? 'border-yellow-400 scale-110 shadow-lg' : 'border-neutral-100 group-hover:border-emerald-200'}
                  `}>
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt={user.name || "User"}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-neutral-300" />
                                        )}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex flex-col">
                                    <span className="font-bold text-base md:text-xl text-neutral-900 group-hover:text-emerald-900 transition-colors flex items-center gap-2">
                                        {user.name || "Anonymous"}
                                        {rank === 1 && <span className="text-[10px] bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full font-black uppercase tracking-widest italic scale-75 origin-left">bookworm</span>}
                                    </span>
                                    <span className="text-xs text-neutral-400 font-mono tracking-tighter">@{user.username}</span>
                                </div>
                            </div>

                            {/* Stats & Link Icon */}
                            <div className="flex items-center gap-6 md:gap-12 relative z-10">
                                <div className="hidden sm:flex flex-col items-end">
                                    <span className="text-lg md:text-2xl font-black text-neutral-900 flex items-center gap-2">
                                        {user.completedBooksCount}
                                        <BookOpen className="w-4 h-4 text-emerald-600" />
                                    </span>
                                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">Books Read</span>
                                </div>

                                <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-emerald-100 transition-all duration-500 group-hover:rotate-0 rotate-12">
                                    <ArrowUpRight className="w-5 h-5 text-emerald-600" />
                                </div>

                                {/* Mobile Stats (only visible on mobile) */}
                                <div className="sm:hidden flex flex-col items-end shrink-0">
                                    <span className="text-lg font-black text-neutral-900">{user.completedBooksCount}</span>
                                    <BookOpen className="w-3 h-3 text-emerald-600" />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="flex justify-center pt-10">
                <Link
                    href="/login"
                    className="px-8 py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-900 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 italic"
                >
                    Own the top spot
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
