"use client";

import { useState } from "react";
import axios from "axios";

/*
  Book type
  onPage is stored PER BOOK (single source of truth)
*/
type Book = {
  id: string;
  name: string;
  pageCount: number;
  onPage: number;
};

export default function ReadList() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  /*
    Fetch page count from API and RETURN it
  */
  async function fetchBook(title: string) {
    const res = await axios.get(`/api/book?intitle=${title}`);
    return Number(res.data.pageCount) || null;
  }

  /*
    Add a new book
  */
  const handleSubmit = async () => {
    if (!name) return;

    setLoading(true);

    const pageCount = await fetchBook(name);
    if (!pageCount) {
      setLoading(false);
      return;
    }

    setBooks((prev) => {
      // ✅ duplicate check inside updater (safe)
      const exists = prev.some(
        (b) => b.name.toLowerCase() === name.toLowerCase()
      );

      if (exists) {
        alert("Book already added");
        return prev;
      }

      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          name,
          pageCount,
          onPage: 0, // ✅ initialize progress here
        },
      ];
    });

    setName("");
    setLoading(false);
  };

  /*
    Update onPage for a SPECIFIC book
  */
  const handleOnPage = (id: string, newPage: number) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              onPage: Math.min(newPage, b.pageCount), // ✅ safety: no overflow
            }
          : b
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl mt-10">Readlist 🖋️</h1>

      {/* Book name input */}
      <input
        value={name}
        placeholder="enter book name"
        className="input"
        onChange={(e) => setName(e.target.value)}
      />

      <button className="btn" onClick={handleSubmit}>
        find
      </button>

      {loading && <p>loading...</p>}

      {/* Render books */}
      {books.map((b) => {
        const progressBar = (b.onPage / b.pageCount) * 100;
        
        

        return (
          <div key={b.id} className="flex flex-col gap-3">
            <p>
              {b.name} — {b.pageCount} pages
            </p>
            
            {/* Controlled input tied DIRECTLY to book.onPage */}
            <input
              type="number"
              value={b.onPage || ""}
              className="input input-outline"
              onChange={(e) =>
                handleOnPage(b.id, Number(e.target.value) || 0)
              }
              placeholder="enter page number"
            />
            

            <progress
              className="progress progress-success w-56"
              value={progressBar}
              max="100"
            />

            <p>{Math.round(progressBar)}%</p>
          </div>
        );
      })}
    </div>
  );
}
