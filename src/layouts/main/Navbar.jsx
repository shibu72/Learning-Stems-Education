import Button from "../../components/shared/Button";

export default function Navbar() {
  return (
    <div>
      <nav className="flex gap-[90px] justify-center items-center h-[80px] w-[1199.32px] m-auto pt-6">
        <img className="w-[107.32px] h-[80px]" src="/Logo.png" alt="" />

        <div className="flex gap-[32px]">
          <a href="">Home</a>
          <select name="" id="">
            <option value="">Online Tuition</option>
            <option value="">Math</option>
            <option value="">English</option>
          </select>

          <select name="" id="">
            <option value="">Personal Development</option>
            <option value="">STEM Education</option>
            <option value="">Arts and Crafts</option>
            <option value="">Science</option>
          </select>

          <select name="" id="">
            <option value="">Resources</option>
          </select>
        </div>

        <div className="flex gap-[24px]">
          <button className="border rounded-full w-[171px] p-[10px]">
            Apply as a tutor
          </button>
          <div className="w-[104px] h-[45px]">
          <Button className="">Login</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
