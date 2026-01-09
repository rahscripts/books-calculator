"use client";

import { useEffect, useState, useMemo } from "react";
import StatCard from "./card/StatCard";
import BookCard from "./card/BookCard";
import { syncBooks, Book } from "@/app/actions";
import Image from "next/image";

/* --- ICONS (SVG) for Zero Dependencies --- */
const Icons = {
  Search: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  Trash: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
  BookOpen: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
};

// Types for Google Books API response
interface GoogleBookVolumeInfo {
  title?: string;
  authors?: string[];
  imageLinks?: {
    thumbnail?: string;
    smallThumbnail?: string;
  };
  pageCount?: number;
}

interface GoogleBookItem {
  id: string;
  volumeInfo: GoogleBookVolumeInfo;
}

export default function ReadList() {
  // State
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GoogleBookItem[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 1. Load Data safely (Fixes Hydration Bug)
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("my-books");
    if (saved) {
      try {
        setBooks(JSON.parse(saved));
      } catch (e) {
        console.error("Save file corrupted", e);
      }
    }
  }, []);

  // 2. Save Data automatically
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("my-books", JSON.stringify(books));
      syncBooks(books).catch(console.error);
    }
  }, [books, mounted]);

  // 3. Search Logic with Debounce
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      try {
        // Use built-in fetch
        const res = await fetch(`/api/book?intitle=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setResults(data.items || []);
      } catch (err) {
        console.error(err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => fetchBooks(), 500);
    return () => clearTimeout(timer);
  }, [query]);

  /* --- API & ACTIONS --- */
  const addBook = (apiBook: GoogleBookItem) => {
    // Prevent adding same book twice
    if (books.some(b => b.googleId === apiBook.id)) {
      setQuery("");
      setResults([]);
      return;
    }

    const info = apiBook.volumeInfo;
    const newBook: Book = {
      id: crypto.randomUUID(),
      googleId: apiBook.id,
      title: info.title || "Untitled",
      authors: info.authors || ["Unknown"],
      cover: info.imageLinks?.thumbnail || "",
      pageCount: info.pageCount || 100, // Default to avoid 0 division
      currentPage: 0,
    };

    setBooks(prev => [newBook, ...prev]);
    setQuery("");
    setResults([]);
  };

  const updateProgress = (id: string, newPage: number) => {
    setBooks(prev => prev.map(book => {
      if (book.id !== id) return book;
      // Constraint: Cannot go below 0 or above max pages
      const safePage = Math.max(0, Math.min(newPage, book.pageCount));
      return { ...book, currentPage: safePage };
    }));
  };

  const deleteBook = (id: string) => {
    if (confirm("Remove this book from your list?")) {
      setBooks(prev => prev.filter(b => b.id !== id));
    }
  };

  /* --- CALCULATIVE STATS (Dashboard) --- */
  const stats = useMemo(() => {
    const totalBooks = books.length;
    const totalPages = books.reduce((sum, b) => sum + b.pageCount, 0);
    const totalRead = books.reduce((sum, b) => sum + b.currentPage, 0);
    const percent = totalPages === 0 ? 0 : Math.round((totalRead / totalPages) * 100);
    const completedBooks = books.filter(b => b.currentPage === b.pageCount).length;

    return { totalBooks, totalPages, totalRead, percent, completedBooks };
  }, [books]);

  if (!mounted) return null; // Wait for client load

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 font-sans text-slate-800">

      {/* 1. CALCULATIVE DASHBOARD */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Books Reading" value={stats.totalBooks} color="blue" />
        <StatCard label="Books Finished" value={stats.completedBooks} color="green" />
        <StatCard label="Pages Read" value={stats.totalRead.toLocaleString()} color="purple" />
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center">
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase mb-2">
            Global Progress
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-extrabold text-slate-800">{stats.percent}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
            <div className="bg-slate-800 h-full transition-all duration-500" style={{ width: `${stats.percent}%` }}></div>
          </div>
        </div>
      </div>

      {/* 2. SEARCH INTERFACE */}
      <div className="relative max-w-2xl mx-auto z-20">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            <Icons.Search />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-lg placeholder:text-slate-400"
            placeholder="Search for a book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {loading && <div className="absolute right-4 top-4 text-xs text-slate-400">Loading...</div>}
        </div>

        {/* Search Results Dropdown */}
        {results.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
            {results.map((item) => (
              <button
                key={item.id}
                onClick={() => addBook(item)}
                className="w-full flex items-center gap-4 p-3 hover:bg-slate-50 text-left transition-colors border-b border-slate-50 last:border-0"
              >
                <div className="relative w-10 h-14 bg-slate-200 rounded overflow-hidden shrink-0">
                  {item.volumeInfo.imageLinks?.smallThumbnail ? (
                    <Image
                      src={item.volumeInfo.imageLinks.smallThumbnail}
                      alt={item.volumeInfo.title || "Book cover"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[8px] text-slate-400">No Image</div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-900 line-clamp-1">{item.volumeInfo.title}</div>
                  <div className="text-xs text-slate-500">{item.volumeInfo.authors?.[0]}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. RESPONSIVE GRID (Books) */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Icons.BookOpen /> Your Library
        </h2>

        {books.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400">
            Start by searching for a book above.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onUpdate={updateProgress}
                onDelete={deleteBook}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
/* --- SUB-COMPONENTS for cleaner code --- */



