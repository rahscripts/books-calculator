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
  Trash: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
  Plus: () => <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
};


function BookCard({ book, onUpdate, onDelete }: { book: Book, onUpdate: (id: string, page: number) => void, onDelete: (id: string) => void }) {
  const progress = Math.round((book.currentPage / book.pageCount) * 100);
  const isFinished = progress === 100;

  const handleQuickAdd = (amount: number) => {
    onUpdate(book.id, book.currentPage + amount);
  };

  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full hover:border-slate-300 relative overflow-hidden">

      {/* Top Section: Cover & Info */}
      <div className="flex gap-4 mb-4">
        {/* Cover Image */}
        <div className="relative w-20 h-28 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden shadow-inner border border-slate-100 group-hover:scale-[1.02] transition-transform duration-300">
          {book.cover ? (
            <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400">No Cover</div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-slate-900 text-base leading-tight line-clamp-2 pr-6" title={book.title}>
              {book.title}
            </h3>
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(book.id); }}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100"
            >
              <Icons.Trash />
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-medium">{book.authors[0]}</p>

          <div className="mt-auto pt-2">
            <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <span className={isFinished ? "text-emerald-600" : "text-blue-600"}>
                {progress}%
              </span>
              <span className="text-slate-400">
                {book.currentPage} / {book.pageCount}
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${isFinished ? "bg-emerald-500" : "bg-blue-600"}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Controls */}
      <div className="pt-4 border-t border-slate-100 mt-auto space-y-3">

        {/* Manual Input */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Log Pages</span>
          <input
            type="number"
            className="w-20 text-right bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold focus:outline-none focus:border-slate-400 focus:bg-white transition-all text-slate-700 placeholder:text-slate-300"
            placeholder="..."
            value={book.currentPage || ""}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => onUpdate(book.id, parseInt(e.target.value) || 0)}
          />
        </div>

        {/* Quick Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {[5, 10, 20].map(amount => (
            <button
              key={amount}
              onClick={() => handleQuickAdd(amount)}
              disabled={isFinished}
              className="flex items-center justify-center gap-1 py-1.5 rounded-lg border border-slate-100 bg-white text-[10px] font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 hover:text-blue-600 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +{amount}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}

export default BookCard;