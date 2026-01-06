'use client';
import { useEffect, useState } from "react";
import Footer from "./components/Footer";


export default function Home() {
  const [pages, setPages] = useState(0);

  
  const [books, setBooks] = useState(0);

  useEffect(() => {
    const totalPageInYear = pages * 365;
    const totalBooksInYear = Math.round(totalPageInYear / 320);
    setBooks(totalBooksInYear);
  }, [pages])
  return (
    <section className="max-w-2xl mx-auto p-20 min-h-screen text-center space-y-8  h-full">
      <div>
        <h1 className="text-3xl font-bold ">Books Calculator <span className="uppercase text-xs italic tracking-tighter decoration-wavy underline text-green-700 font-bold ">by mr</span></h1>
      </div>
      <div>If i read
        <select onChange={(e) => setPages(Number(e.target.value))} name="bookpage" className="select w-fit mx-2 select-success" id="">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select> <span className="font-bold">pages</span> everyday. <br />
        <div className="mt-8 flex flex-col -space-y-2">
          <div>By the end of the year</div>
           <div className="text-3xl"><span className="text-1xl text-green-700 font-black">i will read <span className="text-2xl text-red-700 underline ">{books} books</span></span>.
           </div>
           </div>
      </div>
      <div className="mt-30">
        <Footer />
      </div>
    </section>
  );
}
