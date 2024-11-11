import { ArrowLeft, ArrowRight } from "lucide-react";
import Testamonial from "../../shared/Testamonial";
export default function TestamonialSlider() {
    return (
        <div className="h-[493px] bg-[#F3FFF3] py-10 my-20">
            <div className="flex justify-between items-center w-[1200px] m-auto">
                <ArrowLeft className="text-[#028F02]" />

                <Testamonial />

                <ArrowRight className="text-[#028F02]" />

            </div>
        </div>
    )
}
