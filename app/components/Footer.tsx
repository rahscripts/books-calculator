"use client";

import Image from "next/image";
import Link from "next/link";
import SquigglyArrow from "./squiggle-arrow";

const PROFILE_LINK = "https://www.rahscripts.online/";
const X_LINK = "https://x.com/rahscripts";
const X_FOLLOWERS = 5;

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
        name: "Movies Calculator",
        link: "https://movies-calculator.vercel.app/",
    },
];

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* Intro */}
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-0.5 items-center">
                    <div>
                        hey, i am{" "}
                        <Link target="_blank" href={PROFILE_LINK}>
                            <span className="font-bold text-green-500 cursor-pointer hover:text-green-600 transition-all duration-100">
                                mrahman!
                            </span>
                        </Link>
                    </div>

                    <Link target="_blank" href={PROFILE_LINK}>
                        <div className="cursor-pointer">
                            <Image
                                src="/profile.png"
                                alt="profile image"
                                height={30}
                                width={22}
                            />
                        </div>
                    </Link>
                </div>

                {/* Description */}
                <div className="flex flex-col-reverse mt-8 gap-5">
                    <div className="flex flex-col -space-y-8">
                        <span className="max-md:text-xs italic">
                            I built this Books Calculator because I was curious—
                        </span>
                        <br />
                        <span className="text-xl font-semibold">
                            how many books can I realistically read in a year?
                        </span>
                    </div>
                </div>
            </div>

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

                        <span className=" px-1 rounded font-bold -ml-2">
                            👋🏻 🦜
                        </span>
                    </Link>
                </div>



            </div>
        </div>
    );
}
