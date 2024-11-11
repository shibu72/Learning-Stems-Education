import SideContent from "../../shared/SideContent";


export default function ForParents() {
  return (
    <div className="w-[1320px] h-[549px] bg-gradient-to-r from-[#F3FFF300] to-[#F3FFF3] rounded-[32px] mt-20 relative">
        <div className="w-[1176px] h-[426px] m-auto flex gap-10 justify-between items-center absolute top-16 right-4">
            <SideContent paragraph="As a parent, stay involved in your child's learning journey. Track their progress, view assignments, and receive updates on their achievements. Our platform ensures you're always connected to their educational growth." mainTitle="For" title="Parents"/>
            <img className="w-[603px] h-[426px]" src="/parent.png" alt="" />
        </div>
        
    </div>
  )
}
