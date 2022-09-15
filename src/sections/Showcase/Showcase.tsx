import gsap, { Elastic } from "gsap";
import { useEffect } from "react";
import ShowcaseSlider from "../../components/Slider/ShowcaseSlider";
import descFirstLogoText from "../../Gsap-Shorthand/descFirstLogoText";
import learnMore from "../../Gsap-Shorthand/learnMore";
import sectionTitle from "../../Gsap-Shorthand/sectionTitle";

function Skills() {
  useEffect(() => {
    sectionTitle({
      class: ".__showCaseTitleLetter",
      trigger: ".__showCaseTitleTigger",
    }).to(".__showCaseLearnMoreTrigger", {
      opacity: 1,
      y: 0,
      ease: "back",
    });
    descFirstLogoText({
      wrapperClass: ".__showCaseTextWrapper",
      trigger: "._showCaseTextTrigger",
      class1: ".__showCaseI1",
      class2: ".__showCaseI2",
    });
    learnMore({
      trigger: ".__showCaseLearnMoreTrigger",
      class: ".__showCaseLearnMore",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__showCaseSliderTrigger",
          start: "top 70%",
        },
      })
      .to(".__showcaseSlider", {
        y: 0,
        ease: Elastic.easeOut.config(1, 0.3),
        delay: 0.3,
        duration: 3,
      })
      .to(".__showcaseDemoTitle", { opacity: 1 }, "-=1");
  }, []);
  return (
    <section>
      <div className="container flex justify-between">
        <div className="hidden md:flex items-center flex-col mt-[75px] relative __showCaseLearnMoreTrigger opacity-0 -translate-y-8">
          <p className="rotate-90 font-second whitespace-pre absolute top-0 -left-10">
            Learn More
          </p>
          <div className="__showCaseLearnMore h-0 w-0.5 mt-[70px] bg-black relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before::h-2 before:aspect-square before:rounded-full before:bg-black before:p-1.5"></div>
        </div>
        <div className="space-y-5 __showCaseTitleTigger">
          <h1 className="__titleTxt !text-[4.6rem] md:!text-[10rem] lg:!text-[13rem] overflow-hidden">
            {[..."Showcase"].map((letter, i) => (
              <span
                key={i}
                className="inline-block translate-y-full __showCaseTitleLetter"
              >
                {letter}
              </span>
            ))}
          </h1>

          <div className="container-sm space-y-16 md:space-y-24">
            <div className="space-y-5 md:w-[60%] __showCaseTextWrapper translate-y-full ">
              <div className="flex items-start md:items-center gap-5 _showCaseTextTrigger">
                <h2 className="text-7xl translate-y-2 md:translate-y-0 font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                  <span className="translate-y-1.5">I</span>
                  <span className="absolute top-2.5 right-3 h-px bg-black inline-block w-0 __showCaseI1"></span>
                  <span className="absolute bottom-2.5 left-3 h-px bg-black __showCaseI1 inline-block w-0"></span>
                  <span className="absolute bottom-0 -translate-y-[18px] right-3.5 __showCaseI2 bg-black inline-block h-0 w-px"></span>
                  <span className="absolute top-0 translate-y-[18px] left-3.5 __showCaseI2 bg-black inline-block w-px h-0"></span>
                </h2>
                <p className="font-primary text-2xl">
                  would like to play with code and make new web app its give me
                  much happiness so, here in this section you can see my more
                  websites demo & link you can visit to click.
                </p>
              </div>
              <p className="font-second">
                If you learn code the you can do anything with that, you have to
                provably need to know how to make condition and write better
                code, and also you need give some pateint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-20 space-y-8 __showCaseSliderTrigger overflow-hidden">
        <h3 className="text-5xl font-primary text-center __showcaseDemoTitle opacity-0">
          Demos
        </h3>
        <div className="__showcaseSlider -translate-y-[130%]">
          <ShowcaseSlider />
        </div>
      </div>
    </section>
  );
}

export default Skills;
