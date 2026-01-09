import Image from "next/image";

type Book = {
  id: string;        // Unique local ID
  googleId: string;  // API ID to check duplicates
  title: string;
  authors: string[];
  cover: string;
  pageCount: number;
  currentPage: number;
};

const Icons = {
  Search: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Trash: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
  BookOpen: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
};


function BookCard({ book, onUpdate, onDelete }: { book: Book, onUpdate: (id: string, page: number) => void, onDelete: (id: string) => void }) {
  const progress = Math.round((book.currentPage / book.pageCount) * 100);
  const isFinished = progress === 100;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col w-fit gap-4">
      {/* Cover Image */}
      <div className="relative w-20 h-28 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden shadow-inner">
        {book.cover ? (
          <img src={book.cover} alt={book.title} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">No Cover</div>
        )}
      </div>

      {/* Details & Controls */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-slate-900 leading-tight line-clamp-2" title={book.title}>
              {book.title}
            </h3>
            <button
              onClick={() => onDelete(book.id)}
              className="text-slate-300 hover:text-red-500 transition-colors"
            >
              <Icons.Trash />
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-1 line-clamp-1">{book.authors[0]}</p>
        </div>

        <div className="mt-3">
          {/* Progress Bar */}
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span className={isFinished ? "text-emerald-600" : "text-blue-600"}>
              {progress}%
            </span>
            <span className="text-slate-400">
              {book.currentPage} / {book.pageCount}
            </span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${isFinished ? "bg-emerald-500" : "bg-blue-500"}`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Input */}
          <input
            type="number"
            className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Update page..."
            value={book.currentPage || ""}
            onChange={(e) => onUpdate(book.id, parseInt(e.target.value) || 0)}
          />
        </div>
      </div>
    </div>
  );
}

export default BookCard;