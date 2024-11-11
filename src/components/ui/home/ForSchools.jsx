import SideContent from '../../shared/SideContent'

export default function ForSchools() {
    return (
        <div>
            <div className="w-[1320px] h-[549px] bg-gradient-to-r to-[#F3FFF300] from-[#F3FFF3] rounded-[32px] m-auto my-20 relative">
                <div className="w-[1176px] h-[426px] m-auto flex flex-row-reverse gap-10 justify-between items-center absolute top-16 left-4">
                    <SideContent paragraph="As a parent, stay involved in your child's learning journey. Track their progress, view assignments, and receive updates on their achievements. Our platform ensures you're always connected to their educational growth." mainTitle="For" title="Schools" />
                    <img className="w-[603px] h-[426px]" src="/school.png" alt="" />
                </div>

            </div>
        </div>
    )
}
