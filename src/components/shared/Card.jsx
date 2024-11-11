import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Card() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('/fake.json')
     .then(response => response.json())
     .then((data) => setItems(data.tuition))
  }, [])
  return (
    <>
      {
        items.map((item, index)=><div key={index} className="hover:bg-[#06C532] hover:text-[#ffffff] border border-[#AEDBAEA1] rounded-2xl w-[387px] h-[417px] p-4 grid gap-3 transition-all duration-300">
        <img src={item.image} alt={item.title} />
        <h2 className="text-xl font-bold">{item.title}</h2>
        <p className="text-lg font-normal">{item.description}</p>
        <a className="text-lg font-medium flex items-center gap-2" href="">Learn more <ArrowRight/></a>
    </div>)
      }
        
    </>
  )
}
