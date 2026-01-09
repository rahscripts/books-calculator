import { getPublicProfile } from "@/app/actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function PublicPage({ params }: { params: { username: string } }) {
    const { username } = await params;
    const profile = await getPublicProfile(username);

    if (!profile) {
        notFound();
    }

    // Calculate Stats
    const books = profile.books;
    const totalBooks = books.length;
    const totalPages = books.reduce((sum, b) => sum + b.pageCount, 0);
    const totalRead = books.reduce((sum, b) => sum + b.currentPage, 0);
    const percent = totalPages === 0 ? 0 : Math.round((totalRead / totalPages) * 100);

    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto overflow-hidden">
                        {profile.image ? (
                            <div className="relative w-full h-full">
                                <img src={profile.image} alt={profile.name} className="object-cover" />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-3xl">👤</div>
                        )}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">{profile.name}</h1>
                        <p className="text-slate-500">@{profile.username}</p>
                    </div>
                    <div className="flex justify-center gap-2">
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                            {totalBooks} Books
                        </span>
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                            {STATS_EMOJI(percent)} {percent}% Complete
                        </span>
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                            <div className="relative w-20 h-28 flex-shrink-0 bg-slate-200 rounded shadow-md overflow-hidden">
                                {book.cover ? (
                                    <img
                                        src={book.cover}
                                        alt={book.title}

                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">No Image</div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0 space-y-2">
                                <div>
                                    <h3 className="font-bold text-slate-900 leading-tight line-clamp-2">{book.title}</h3>
                                    <p className="text-xs text-slate-500 line-clamp-1">{book.authors.join(", ")}</p>
                                </div>

                                {/* Progress Bar */}
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                                        <span>{book.currentPage} / {book.pageCount}</span>
                                        <span>{Math.round((book.currentPage / book.pageCount) * 100)}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-slate-900 rounded-full"
                                            style={{ width: `${(book.currentPage / book.pageCount) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-12">
                    <Link href="/" className="text-sm text-slate-400 hover:text-slate-900 transition-colors">
                        Made with Books Calc
                    </Link>
                </div>

            </div>
        </main>
    );
}

function STATS_EMOJI(percent: number) {
    if (percent >= 100) return "🏆";
    if (percent > 75) return "🔥";
    if (percent > 25) return "📖";
    return "🌱";
}
