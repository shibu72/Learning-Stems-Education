import Card from "../../shared/Card";
import Hr from "../../shared/Hr";
import Title from "../../shared/Title";

export default function TuitionProgram() {
  return (
    <div className="bg-[#F3FFF3] h-[711px] py-14 mt-60">
      <div className="w-[1200px] m-auto grid gap-12">
        <div className="w-[920px] grid gap-4 justify-center items-center m-auto text-center">
          <span className="m-auto text-center"><Hr/></span>
          <Title>Our Tuition <span className="text-[#FF8C00]">Program</span></Title>
          <p className="text-[18px] text-[#475467]">Discover what your child can achieve with a brilliant tutor and a curriculum tailored to their individual needs.</p>
        </div>

        <div className="h-[417px] flex gap-5">
          <Card />
        </div>
      </div>
    </div>
  )
}
