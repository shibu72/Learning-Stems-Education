import { Star } from "lucide-react";

export default function Marque() {
    return (
        <div >
            <div className="w-[1440px] h-[129px] bg-[#F3FFF3] text-center mt-10 flex items-center">
            <marquee direction="left">
                <div className="flex gap-2 items-center m-auto text-[40.96px] font text-[#98A2B3]">
                    <Star />
                    ... Virtual learning, Experienced Tutors, Affordable, Engaging Lessons ... Virtual learning, Experienced Tutors, Affordable, Engaging Lessons ... Virtual learning, Experienced Tutors, Affordable, Engaging Lessons ...
                </div>
            </marquee>
            </div>
        </div>
    )
}
