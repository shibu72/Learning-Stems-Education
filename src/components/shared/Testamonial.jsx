import { Star } from "lucide-react";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Testamonial() {
  return (
    <div>
        <div className="w-[598px] h-[346px] grid gap-8 justify-center items-center justify-items-center m-auto">
                <BiSolidQuoteLeft className="text-[#028F0282] w-[39.69px] h-[31.75px]" />
                <h2 className="text-3xl font-bold text-[#1D2939]">A Game Changer for My Child&#39;s Learning!</h2>
                <p className="text-xl font-normal">We’ve seen incredible progress since using this platform. The personalized lessons keep my child engaged, and the flexible schedule fits perfectly into our routine. Highly recommended!</p>
                <div className="flex gap-[11.08px]">
                    <Star className="fill-[#028F02] stroke-none w-[24px] h-[22.9px]" />
                    <Star className="fill-[#028F02] stroke-none w-[24px] h-[22.9px]" />
                    <Star className="fill-[#028F02] stroke-none w-[24px] h-[22.9px]" />
                    <Star className="fill-[#028F02] stroke-none w-[24px] h-[22.9px]" />
                    <Star className="fill-[#028F02] stroke-none w-[24px] h-[22.9px]" />
                </div>
                <div className="flex gap-2 items-center justify-center m-auto">
                    <img className="w-[43px] h-[43px]" src="/person.png" alt="person" />
                    <h3 className="text-[16px] font-semibold">Alex Dhoni <br /> <span className="font-normal text-[#667085]">Teacher</span></h3>
                </div>
            </div>
    </div>
  )
}
