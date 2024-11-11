import { ArrowRight } from "lucide-react";
import Button from "../../shared/Button";
import { BiMessageRounded } from "react-icons/bi";

export default function TutionForm() {
  return (
    <div className="h-[378px] bg-[url('/tuitionFrom_bg.png')] bg-no-repeat bg-cover bg-center mt-20 text-white relative">
        <div className="bg-[#FFFFFF30] w-[788px] h-[234px] m-auto rounded-2xl relative top-20">
            <div className="w-[676px] h-[163px] flex justify-between items-center m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="grid gap-5">
            <h2 className="text-[33px] font-bold">Tuition from &#163;114 / month
            </h2>
            <p className="text-xl font-normal">Get expert online tuition for personalized learning</p>
            <div className="w-[258px] h-[49px]">
            <Button className={''}>
                <p className="flex gap-2 px-2"><span>Book 2 weeks free trial</span> <ArrowRight/></p>
                </Button>
            </div>
            </div>

            <img className="w-[111.23px] h-[104.8px]" src="/Group.png" alt="" />
            </div>
        </div>

        <div className="w-[99px] h-[99px] bg-white rounded-full p-7 absolute -top-4 right-20 border">
        <BiMessageRounded className="text-[#038D03] w-[48.23px] h-[45.01px]"/>

        </div>

    </div>
  )
}
