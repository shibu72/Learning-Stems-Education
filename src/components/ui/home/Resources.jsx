import SideContent from "../../shared/SideContent";

export default function Resources() {
  return (
    <div className="h-[772px] m-auto my-20 relative bg-[url('/resource_bg.png')] bg-no-repeat bg-contain bg-center">
                <div className="w-[1176px] h-[426px] m-auto flex flex-row-reverse gap-10 justify-between items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <SideContent paragraph="Visit our online store for supplies and explore the book shop for textbooks and materials. Everything you need for learning in one place!" mainTitle="Learning" title="Resources" />
                    <img className="w-[590px] h-[610px]" src="/resourse.png" alt="" />
                </div>

            </div>
  )
}
