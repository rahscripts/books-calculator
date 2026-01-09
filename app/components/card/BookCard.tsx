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
  Trash: () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
};


function BookCard({ book, onUpdate, onDelete }: { book: Book, onUpdate: (id: string, page: number) => void, onDelete: (id: string) => void }) {
  const progress = Math.round((book.currentPage / book.pageCount) * 100);
  const isFinished = progress === 100;

  return (
    <div className="group bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col w-fit gap-4 cursor-pointer hover:border-slate-200">
      {/* Cover Image */}
      <div className="relative w-16 h-24 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
        {book.cover ? (
          <img src={book.cover} alt={book.title} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">No Cover</div>
        )}
      </div>

      {/* Details & Controls */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2 pr-2" title={book.title}>
              {book.title}
            </h3>
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(book.id); }}
              className="text-slate-300 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded"
            >
              <Icons.Trash />
            </button>
          </div>
          <p className="text-[10px] text-slate-500 mt-1 line-clamp-1 font-medium">{book.authors[0]}</p>
        </div>

        <div className="mt-4 space-y-2">
          {/* Progress Bar */}
          <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-wider">
            <span className={isFinished ? "text-emerald-600" : "text-blue-600"}>
              {progress}%
            </span>
            <span className="text-slate-300">
              {book.currentPage} / {book.pageCount}
            </span>
          </div>

          <div className="w-full bg-slate-50 rounded-full h-1 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${isFinished ? "bg-emerald-500" : "bg-blue-500"}`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Input */}
          <input
            type="number"
            className="w-full bg-transparent border-b border-slate-100 py-1 text-xs font-medium focus:outline-none focus:border-slate-900 transition-colors text-slate-600 placeholder:text-slate-300"
            placeholder="Pages..."
            value={book.currentPage || ""}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => onUpdate(book.id, parseInt(e.target.value) || 0)}
          />
        </div>
      </div>
    </div>
  );
}

export default BookCard;