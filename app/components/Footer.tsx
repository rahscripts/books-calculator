"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const calculators = [
        {
            name: "Screen Time Calculator",
            link: "https://screen-time-calculator-seven.vercel.app/"
        },
        {
            name: "Calorie Calculator",
            link: "https://gym-calculator-theta.vercel.app/"
        },
        {
            name: "Movies Calculator",
            link: "https://movies-calculator.vercel.app/"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-0.5">
                    <div>hey, i am <Link target="_blank" href="https://www.rahscripts.online/">
                        <span className="font-bold text-green-500 cursor-pointer hover:text-green-600 transition-all duration-100">
                            mrahman!
                        </span>
                    </Link></div>
                    <Link target="_blank" href={"https://www.rahscripts.online/"}>
                        <div className="cursor-pointer">
                            <Image src={"/profile.png"} alt="profile image" height={30} width={22} />
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col-reverse gap-5">
                    <div className="flex flex-col -space-y-7">
                       <span className="max-md:text-xs italic">I built this Books Calculator because I was curious—</span><br /><span className="text-2xl font-semibold">how many books can I realistically read in a year? </span>
                </div> 
                
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-5">
                <div className="font-semibold mt-8">
                    from the maker:
                </div>
                <div className="flex text-sm mt-2 flex-2 flex-col items-center justify-center">
                    {calculators.map((p) => (
                        <div className="m-2 " key={p.name}>
                            <Link href={p.link}>
                                <p className="transition-all hover:underline duration-300">{p.name}</p>
                            </Link>
                        </div>
                ))}
                </div>
                <div className="mt-10">i build <span className="font-semibold">apps</span> and share what I <span className="font-semibold">learn</span> on <Link href={"https://x.com/rahscripts"} target="_blank"><span className="font-bold underline italic">X</span>.</Link>
                </div>
            </div>
            
        </div>
    )
}