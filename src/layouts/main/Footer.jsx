import { ArrowRight } from "lucide-react";
import Button from "../../components/shared/Button";
export default function Footer() {
    return (
        <div className="bg-[#F3FFF3] h-[533.99px] p-20">
            <div className="w-[1200px] m-auto">
                <div className="flex gap-4 items-center w-[372px] h-[61.3px]">
                    <img className="w-[61.3px] h-[61.3px]" src="/Content.png" alt="contact" />
                    <h2 className="text-5xl font-semibold">Untitled UI</h2>
                </div>

                <div className="flex justify-between items-center">
                    <div className="grid gap-[24px] mt-10">
                        <h2 className="text-[32px] uppercase text-[#FF8C00]">Join the Community</h2>
                        <div className="flex gap-[16px]">
                            <input type="text" className="w-[338px] h-[49px] bg-[#52135C1A] border border-[#028A0242] rounded-[20px]" />
                            <Button className={''}>
                                <span className="flex gap-2 items-center px-2">Subscribe <ArrowRight /></span>
                            </Button>
                        </div>
                        <p className="text-[#333333] text-[18px] font-normal">By subscribing you agree to with our Privacy Policy</p>
                    </div>

                    <div>
                        <ul className="list-none grid gap-[16px] text-[#333333]">
                        <h3 className="text-[20px] font-semibold text-transparent bg-gradient-to-r from-[#000080] to-[#52135C] bg-clip-text">Quick Share</h3>
                            <li>Home</li>
                            <li>Online tuition</li>
                            <li>Professional development</li>
                            <li>Resources</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="list-none grid gap-[24px] text-[#333333]">
                        <h3 className="text-[20px] font-semibold text-transparent bg-gradient-to-r from-[#000080] to-[#52135C] bg-clip-text">Policy</h3>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
<hr className="my-12 border border-[#8D8D8D]" />
<p className="text-[16px] font-normal text-[#333333] text-center">© 2024 abcdss. All rights reserved.</p>
            </div>
        </div>
    )
}
