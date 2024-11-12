import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../shared/Button";
import { ArrowRight } from "lucide-react";
export default function HeroSlider() {

    const checkedComponent = [
        "Experienced tutor",
        "Quality classes",
        "Affordable prices"
    ]

    return (
        <div>
            <div className="w-[1201px] h-[556px] bg-[#E9FFE9D6] border border-[#D0D5DD] rounded-2xl flex gap-[40px] p-10 m-auto mt-10">
                <div className="w-[582px] h-[230px] grid gap-[32px]">
                    <h1 className="text-[48px]">Let’s Ignite Your Child’s
                        <br />
                        <span className="text-[#FF8C00]">Love for Learning</span>
                    </h1>
                    <p className="text-[20px] font-normal"> We nuture curiosity, critical thinking and academic achievement through virtual classes, fun activities and games, making learning engaging and accessible.</p>

                    <div className="w-[247px]">
                    <Button className=''>
                        <span className="flex gap-2 px-2">
                        Get 2 weeks free trial <ArrowRight />
                        </span>
                        </Button>
                    </div>

                    <div className="flex gap-[24px]">
                        {
                            checkedComponent.map((item, index) => <div key={index} className="flex gap-[8px] items-center">
                                <IoIosCheckmarkCircle className="fill-orange-600" />
                                <span>{item}</span>
                            </div>)
                        }

                    </div>
                </div>

                <div className="w-[512.13px] h-[394.3px]">
                    <img src="/slide_image.png" alt="" className="w-[512.13px] h-[394.3px]" />
                </div>

            </div>
        </div>
    )
}
