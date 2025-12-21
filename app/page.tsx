'use client';
import { useEffect, useState } from "react";


export default function Home() {
  const [pages, setPages] = useState(0);
  const [books, setBooks] = useState(0);
  
  useEffect(() => {
    const totalPageInYear = pages*365;
    const totalBooksInYear = Math.round(totalPageInYear/320);
    setBooks(totalBooksInYear);
  }, [pages])
  return (
    <section className="max-w-2xl mx-auto p-20 text-center space-y-8 bg-green-200 h-full">
      <div>
        <h1 className="text-3xl font-bold ">Books Calculator <span className="uppercase text-xs italic tracking-tighter decoration-wavy underline text-green-700 font-bold ">by mr</span></h1>
      </div>
      <div>If i read
        <select onChange={(e) => setPages(Number(e.target.value))} name="bookpage" id="">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select> pages everyday. <br />
        By the end of the year <span className="text-1xl text-green-700 font-black">i will read {books} books</span>.
      </div>
      <div></div>
    </section>
  );
}
