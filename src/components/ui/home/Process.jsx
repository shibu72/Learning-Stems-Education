import { useEffect, useState } from "react"
import Title from "../../shared/Title"
import Hr from "../../shared/Hr"

export default function Process() {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('/fake.json')
            .then(response => response.json())
            .then((data) => setItem(data.process))
    }, [])


    return (
        <div className="w-[1195.78px] h-[383.5px] m-auto my-[80px]">
            <div className="w-[916px] grid gap-[15px]">
                <Hr/>
            <Title className={''}>Whatever the Learning Need, We Have the <span className="text-[#FF8C00]">Perfect Tutor for Your Child!</span> </Title>
            </div>

            <div className="relative mt-20">
            <div className="flex flex-wrap gap-[20px] justify-between items-center ">
                {
                    item.map((items, index) => <div key={index} className="w-[394px] h-[132px]">
                        <h2 className="text-[#1D2939] text-[20px] font-bold">{items.title}</h2>
                        <p className="text-[18px] font-normal leading-[29.73px]">{items.description}</p>
                    </div>)
                }

            </div>
            <img className="w-[360.78px] h-[354.7px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src="/process.png" alt="out_process" />
            
            <h3 className="text-center m-auto text-[32px] font-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Our <br /> <span className="text-[#04A504] ">process</span></h3>
            </div>
        </div>
    )
}
