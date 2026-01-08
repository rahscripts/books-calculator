"use client";

import React from 'react'
import { useState, useEffect } from 'react';

const ReadCalculator = () => {
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
  )
}

export default ReadCalculator