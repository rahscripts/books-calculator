"use client";

import Image from "next/image";
import Link from "next/link";
import SquigglyArrow from "./squiggle-arrow";

const PROFILE_LINK = "https://www.rahscripts.online/";
const X_LINK = "https://x.com/rahscripts";


const calculators = [
    {
        name: "Screen Time Calculator",
        link: "https://screen-time-calculator-seven.vercel.app/",
    },
    {
        name: "Calorie Calculator",
        link: "https://gym-calculator-theta.vercel.app/",
    },
    {
        name: "Minimal To-do & Notes",
        link: "https://todo-tracker-ten.vercel.app/",
    },
];

export default function Footer() {
    return (
        <div className="flex scale-90 font-semibold flex-col opacity-65 tracking-tighter items-center justify-center">
            {/* Intro */}
            

            {/* Other calculators */}
            <div className="flex flex-col items-center justify-center p-5">
                <div className="font-semibold mt-8">from the maker:</div>

                <div className="flex flex-col items-center justify-center text-sm mt-2">
                    {calculators.map((calc) => (
                        <div className="m-2" key={calc.name}>
                            <Link href={calc.link}>
                                <p className="transition-all hover:underline duration-300">
                                    {calc.name}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Outro */}
                <div className="flex items-center justify-center gap-2 whitespace-nowrap mt-8">
                    <span>
                        i build <span className="font-semibold">apps</span> and share what I{" "}
                        <span className="font-semibold">learn</span> on
                    </span>

                    <Link
                        href={X_LINK}
                        target="_blank"
                        className="inline-flex items-center cursor-pointer"
                    >
                        <span className="font-bold underline italic -mr-5">X</span>

                        <SquigglyArrow
                            variant="wavy"
                            width={100}     // 👈 reduced (important)
                            height={50}    // 👈 reduced
                            strokeWidth={5}
                            direction="left"
                        />

                       
                    </Link>
                </div>



            </div>
        </div>
    );
}
