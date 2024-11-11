/* eslint-disable react/prop-types */
import { ArrowRight } from "lucide-react";
import Title from "./Title";
import Hr from "./Hr";

export default function SideContent(props) {
    return (
        <div className="w-[533px] h-[286px] grid gap-8">
            <div className="grid gap-[15px]">
                <Hr />
                <Title>{props.mainTitle} <span className="text-[#FF8C00]">{props.title}</span></Title>
                <p>{props.paragraph}</p>
            </div>
            <button className="w-[163px] h-[49px] py-[10px] px-4 flex gap-[10px] items-center justify-center bg-gradient-to-r to-[#039703] from-[#029423] rounded-3xl text-[#ffffff] text-lg"> <span>Learn more</span> <ArrowRight /></button>
        </div>
    )
}
