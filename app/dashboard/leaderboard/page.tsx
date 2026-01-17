import { auth } from "@/auth";
import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { Crown, Medal, User as UserIcon, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function LeaderBoardPage() {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    const client = await clientPromise;
    const db = client.db(); // Use default DB from URI

    const users = await db.collection("users").aggregate([
        {
            $addFields: {
                completedBooksCount: {
                    $size: {
                        $filter: {
                            input: { $ifNull: ["$books", []] }, // Handle missing books array
                            as: "book",
                            cond: { $eq: ["$$book.currentPage", "$$book.pageCount"] }
                        }
                    }
                }
            }
        },
        { $sort: { completedBooksCount: -1 } },
        { $limit: 100 }, // Limit to top 100 for performance
        {
            $project: {
                name: 1,
                username: 1,
                image: 1,
                completedBooksCount: 1
            }
        }
    ]).toArray();
    const userName = session?.user?.name || "there";
    const userRank = users.findIndex(user => user.name === userName) + 1 || null;

    const leaderboardMessage = userRank
        ?
        (userRank < 100
            ? `Hey ${userName || "there"}, your current position on the leaderboard is #${userRank}.`
            : `Hey ${userName || "there"}, you are not in the top 100.`)

        : `Hey ${userName || "there"}, you are not in the leaderboard.`;


    return (
        <main className="max-w-3xl mx-auto py-8 px-4 space-y-8">
            <div className="text-center space-y-2 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ">
                    LeaderBoard
                </h1>



                <p className="text-xs sm:text-sm md:text-base text-green-700">
                    Top readers in the community.
                </p>
                <p className="italic opacity-80 text-xs sm:text-sm md:text-base font-medium ">
                    {leaderboardMessage}
                </p>
            </div>


            <div className="space-y-3">
                {users.map((user, index) => {
                    const rank = index + 1;
                    const highlistUser = session?.user?.name === user.name;

                    return (
                        <section key={user._id.toString()}>
                            <Link target="_blank" href={`https://booksofme.com/${user.username}`}>
                                <div
                                    className={`flex items-center justify-between p-4 ${highlistUser ? "bg-green-100" : "bg-white"} border border-neutral-200 rounded-2xl hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group`}
                                >
                                    <div className="flex items-center gap-4 md:gap-6">
                                        {/* Rank */}
                                        <div className="w-8 flex justify-center font-bold text-lg text-neutral-400 font-mono">
                                            {rank === 1 && <Crown className="w-6 h-6 text-yellow-500 fill-yellow-500" />}
                                            {rank === 2 && <Medal className="w-6 h-6 text-neutral-400 fill-neutral-300" />}
                                            {rank === 3 && <Medal className="w-6 h-6 text-amber-700 fill-amber-600" />}
                                            {rank > 3 && <span>#{rank}</span>}
                                        </div>
                                        {/* Avatar */}
                                        <div className="relative">
                                            <div className={`
                                                w-12 h-12 rounded-full overflow-hidden border-2 flex items-center justify-center bg-neutral-100
                                                ${rank === 1 ? 'border-yellow-500 ring-2 ring-yellow-500/20' :
                                                    rank === 2 ? 'border-neutral-300' :
                                                        rank === 3 ? 'border-amber-700/50' : 'border-transparent'}
                                            `}>
                                                {user.image ? (
                                                    <Image
                                                        src={user.image}
                                                        alt={user.name || "User"}
                                                        width={48}
                                                        height={48}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <UserIcon className="w-5 h-5 text-neutral-400" />
                                                )}
                                            </div>
                                            {rank === 1 && (
                                                <div className="absolute -top-1 -right-1 bg-yellow-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-white">
                                                    1
                                                </div>
                                            )}
                                        </div>
                                        {/* Info */}
                                        <div>
                                            <h3 className="font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                                                {user.name || "Anonymous"}
                                            </h3>
                                            <p className="text-xs text-neutral-500 font-mono">
                                                @{user.username || "user"}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Stats */}
                                    <div className="flex flex-col items-end">
                                        <span className="font-bold text-xl md:text-2xl text-neutral-900 flex items-center gap-2">
                                            {user.completedBooksCount}
                                            <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                                        </span>
                                        <span className="text-[10px] md:text-xs text-neutral-400 font-medium uppercase tracking-wider">
                                            total Books Read
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </section>
                    );
                })}

                {users.length === 0 && (
                    <div className="text-center py-20 text-neutral-400">
                        <p>No readers yet. Be the first!</p>
                    </div>
                )}
            </div>
        </main>
    );
}