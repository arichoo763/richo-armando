import Contact from "./contact";
import Footer from "./footer";
import HeroBanner from "../about/page";
import Portfolio from "../portfolio/page";
import Skills from "../skill/page";
import WorkProccess from "../experience/page";


export default function Home() {
  return (
    <div>
      <HeroBanner />
      <WorkProccess />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
