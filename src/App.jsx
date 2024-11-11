import ForParents from "./components/ui/home/ForParents";
import ForSchools from "./components/ui/home/ForSchools";
import HeroSlider from "./components/ui/home/HeroSlider";
import Marque from "./components/ui/home/Marque";
import Process from "./components/ui/home/Process";
import Resources from "./components/ui/home/Resources";
import TestamonialSlider from "./components/ui/home/TestamonialSlider";
import TuitionProgram from "./components/ui/home/TuitionProgram";
import TutionForm from "./components/ui/home/TutionForm";
import Footer from "./layouts/main/Footer";
import Navbar from "./layouts/main/Navbar";

export default function App() {
  return (
    <div className="w-[1440px] m-auto font-[Nunito]">
      <Navbar />
        <HeroSlider />
        <Marque />
        <Process />
        <TuitionProgram/>
        <ForParents/>
        <ForSchools/>
        <Resources/>
        <TestamonialSlider/>
        <TutionForm/>
      <Footer />
    </div>
  )
}
