import { useEffect } from "react";
import HeaderAndHero from "./components/HeaderAndHero";
import OnLoadScreen from "./components/OnLoadScreen";
import Footer from "./sections/Footer";
import History from "./sections/History";
import Skills from "./sections/Skills";
import Warning from "./sections/Warning";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const endTimeOut = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);

    return () => clearTimeout(endTimeOut);
  }, []);
  return (
    <>
      <OnLoadScreen />
      <div className="space-y-14 md:space-y-[72px] lg:space-y-36">
        <HeaderAndHero />
        <Skills />
        <History />
        <Warning />
        {/* <Showcase /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
