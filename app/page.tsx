'use client';
import { useEffect, useState } from "react";
import Footer from "./components/Footer";


export default function Home() {
  const [pages, setPages] = useState(7);

  const [month, setMonth] = useState(6);

  const [books, setBooks] = useState(0);

  useEffect(() => {
    const totalPageInMonth = pages * 30; //300
    const totalPageInMonthss = totalPageInMonth * month; //900

    const totalBooks = Math.round(totalPageInMonthss / 320); //2 3
    setBooks(totalBooks);
  }, [pages, month])
  return (
    <section className="max-w-2xl mx-auto p-20 min-h-screen text-center space-y-8  h-full">
      <div>
        <h1 className="text-3xl font-bold ">Books Calculator <span className="uppercase text-xs italic tracking-tighter decoration-wavy underline text-green-700 font-bold ">by mr</span></h1>
      </div>
      <div>If i read
        <select defaultValue={7} onChange={(e) => setPages(Number(e.target.value))} name="bookpage" className="select w-fit mx-2 cursor-pointer select-success" id="">
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select> <span className="font-bold">pages</span> everyday 
        for the next  
        <select defaultValue={6} onChange={(e) => setMonth(Number(e.target.value))} name="bookpage" className="select w-fit mx-2 cursor-pointer select-success" id="">
          <option value="1">3</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select> months. <br />
        <div className="mt-8 flex gap-2">
          <div className=" italic ">By the end</div>
           <div className="text-3xl"><span className="text-1xl text-green-700 font-black">i will read <span className="text-5xl text-shadow-md text-red-700 underline ">{books} books 📚</span></span>.
           </div>
           </div>
      </div>
      <div className="mt-30">
        <Footer />
      </div>
    </section>
  );
}
