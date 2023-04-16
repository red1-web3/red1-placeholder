import gsap from "gsap";
import { useEffect } from "react";
import descFirstLogoText from "../../gsapShorthand/descFirstLogoText";
import learnMore from "../../gsapShorthand/learnMore";
import sectionTitle from "../../gsapShorthand/sectionTitle";

function Skills() {
  useEffect(() => {
    sectionTitle({
      class: ".__warningTitleLetter",
      trigger: ".__warningTitleText",
    }).to(".__warningLearnMoreWrap", { opacity: 1, y: 1 });

    descFirstLogoText({
      class1: ".__historyE1",
      class2: ".__historyE2",
      wrapperClass: ".__historyDescWrapper",
      trigger: ".__historyDescTrigger",
    });
    learnMore({
      trigger: ".__warningLearnMoreWrap",
      class: ".__warningLearnMore",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__histroyDownDescTrigger",
          start: "top 60%",
        },
      })
      .to(".__historyDownDescText", {
        y: 0,
        opacity: 1,
        stagger: {
          amount: 0.2,
          ease: "back",
        },
      });
  }, []);

  return (
    <section>
      <div className="container flex justify-between">
        <div className="space-y-5">
          <h1 className="__warningTitleText overflow-hidden !text-[73px] md:!text-[10.7rem] lg:!text-[15rem] __titleTxt">
            {[..."Warning"].map((letter, i) => (
              <span
                key={i}
                className="__warningTitleLetter translate-y-full inline-block"
              >
                {letter}
              </span>
            ))}
          </h1>

          <div className="container-sm space-y-16 md:space-y-24">
            <div className="overflow-hidden">
              <div className="space-y-5 md:w-[60%] translate-y-full __historyDescWrapper">
                <div className="flex items-start md:items-center gap-5 __historyDescTrigger">
                  <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                    <span className="translate-y-1.5">E</span>
                    <span className="absolute top-2.5 right-3 h-px bg-black inline-block w-0 __historyE1"></span>
                    <span className="absolute bottom-2.5 left-3 h-px bg-black __historyE1 inline-block w-0"></span>
                    <span className="absolute bottom-0 -translate-y-[18px] right-3.5 __historyE2 bg-black inline-block h-0 w-px"></span>
                    <span className="absolute top-0 translate-y-[18px] left-3.5 __historyE2 bg-black inline-block w-px h-0"></span>
                  </h2>
                  <p className="font-primary text-2xl">
                    nough about 'skills' and work stuff. Here are some ideas
                    taken from my brain and arranged into words. Hopefully
                    someone finds them useful.
                  </p>
                </div>
                <p className="font-second">
                  At the moment, I only have one lonely post, written in
                  conjunction with launching this site. I'm aiming to allow
                  myself time to do more of this moving forward.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end overflow-hidden __histroyDownDescTrigger">
              <div className="md:w-[60%] space-y-5">
                <h2 className="font-primary text-5xl translate-y-full opacity-0 __historyDownDescText">
                  Getting personal
                </h2>
                <p className="text-sm font-second translate-y-full opacity-0 __historyDownDescText">
                  Creating a personal website is something I've started many
                  times before, usually ending up bored with the idea and
                  unhappy with the outcome. Having finally released something
                  I'm pleased with, I thought it worth exploring my initial
                  thought process in this opening post... Read full post.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-col mt-[75px] relative __warningLearnMoreWrap opacity-0 -translate-y-8">
          <p className="rotate-90 font-second whitespace-pre absolute top-0 -left-10">
            Learn More
          </p>
          <div className="__warningLearnMore h-0 mt-[70px] w-0.5 bg-black relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before::h-2 before:aspect-square before:rounded-full before:bg-black before:p-1.5"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
