import HeaderAndHero from "./components/HeaderAndHero";
import OnLoadScreen from "./components/OnLoadScreen";
import Footer from "./sections/Footer";
import History from "./sections/History";
import Showcase from "./sections/Showcase";
import Skills from "./sections/Skills";
import Warning from "./sections/Warning";

function App() {
  return (
    <>
      <OnLoadScreen />
      <div className="space-y-36">
        <HeaderAndHero />
        <Skills />
        <History />
        <Warning />
        <Showcase />
        <Footer />
      </div>
    </>
  );
}

export default App;
