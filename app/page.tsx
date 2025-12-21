'use client';
import { useState } from "react";


export default function Home() {
  const [pages, setPages] = useState(0);
  const [books, setBooks] = useState(0);
  console.log(pages);
  return (
    <section>
      <div>If i read
        <select onChange={(e) => setPages(Number(e.target.value))} name="bookpage" id="">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select> pages everyday. By the end of the year i will read {books} books.
      </div>
      <div></div>
    </section>
  );
}
