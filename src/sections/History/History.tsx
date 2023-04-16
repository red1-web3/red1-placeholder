import gsap, { Power4 } from "gsap";
import { useEffect } from "react";
import { clientsData, jobCompanyName } from "../../constant";
import descFirstLogoText from "../../gsapShorthand/descFirstLogoText";
import learnMore from "../../gsapShorthand/learnMore";

function Skills() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__titleTxtTrigger",
          start: "top 80%",
        },
      })
      .to(".__historyTitleText", {
        y: 0,
        duration: 0.5,
        stagger: {
          amount: 0.3,
          ease: Power4.easeOut,
        },
      })
      .to(".__historyLearnMoreText", {
        opacity: 1,
        y: 0,
        ease: "back",
        stagger: { amount: 0.2 },
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__jobCompanyTrigger",
          start: "top 60%",
        },
      })
      .to(".__jobCompanyWrapper", { opacity: 1, y: 0, ease: "back" })
      .to(".__jobcompanyName", {
        y: 0,
        opacity: 1,
        ease: "back",
        stagger: {
          amount: 0.3,
        },
        duration: 0.7,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__clientTrigger",
          start: "top 65%",
        },
      })
      .to(".__clientText", {
        ease: "back",
        y: 0,
        opacity: 1,
        stagger: {
          amount: 0.3,
        },
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__clientImageTrigger",
          start: "top 60%",
        },
      })
      .to(".__clientImages", {
        opacity: 1,
        scale: 1,
        ease: "back",
        stagger: 0.2,
      });

    descFirstLogoText({
      class1: ".__historyF1",
      class2: ".__historyF2",
      trigger: "._historyTextTrigger",
      wrapperClass: ".__historyTextWrapper",
    });

    learnMore({
      class: ".__historyLearnMoreHeight",
      trigger: ".__historyContainer",
    });
  }, []);

  return (
    <section>
      <div className="container flex justify-between __historyContainer">
        <div className="hidden md:flex items-center flex-col mt-[75px] relative">
          <p className="rotate-90 font-second whitespace-pre absolute top-0 -left-10  __historyLearnMoreText opacity-0 -translate-y-6">
            Learn More
          </p>
          <div className="h-0 __historyLearnMoreHeight __historyLearnMoreText opacity-0 -translate-y-6 w-0.5 mt-[70px] bg-black relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before::h-2 before:aspect-square before:rounded-full before:bg-black before:p-1.5"></div>
        </div>
        <div className="space-y-5 __titleTxtTrigger">
          <h1 className="__titleTxt !text-[80px] md:!text-[12rem] lg:!text-[17rem] overflow-hidden">
            {[..."History"].map((letter, i) => (
              <span
                key={i}
                className="__historyTitleText translate-y-full inline-block"
              >
                {letter}
              </span>
            ))}
          </h1>

          <div className="container-sm">
            <div className="flex items-end flex-col space-y-16 md:space-y-24">
              <div className="overflow-hidden">
                <div className="space-y-5 md:w-[60%] __historyTextWrapper translate-y-full">
                  <div className="flex items-start md:items-center gap-5 _historyTextTrigger">
                    <h2 className="text-7xl translate-y-2 md:translate-y-0 font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                      <span className="translate-y-1.5">F</span>
                      <span className="absolute top-2.5 right-3 h-px bg-black inline-block w-0 __historyF1"></span>
                      <span className="absolute bottom-2.5 left-3 h-px bg-black __historyF1 inline-block w-0"></span>
                      <span className="absolute bottom-0 -translate-y-[18px] right-3.5 __historyF2 bg-black inline-block h-0 w-px"></span>
                      <span className="absolute top-0 translate-y-[18px] left-3.5 __historyF2 bg-black inline-block w-px h-0"></span>
                    </h2>
                    <p className="font-primary text-2xl">
                      or over a decade, I've worked in a variety of roles. My
                      most recent interesting job was building a new design
                      system & component library for one of my client project.
                    </p>
                  </div>
                  <p className="font-second">
                    Recently I learned some of new technology for animating
                    website, the name are listed below.{" "}
                    <strong>Green sock aniamtion</strong>,
                    <strong>Three js</strong>, <strong>WebGl</strong>,
                    <strong>Spline js 3D</strong>, <strong>Anime js</strong>
                  </p>
                </div>
              </div>

              <div className="__columnGrid w-full">
                <div className="__jobCompanyTrigger">
                  <ul className="space-y-12 opacity-0 translate-y-8 __jobCompanyWrapper">
                    {jobCompanyName.map(({ comapany, date, role }, i) => (
                      <li
                        key={i}
                        className="flex justify-between flex-col md:flex-row md:items-end"
                      >
                        <div>
                          <h3 className="font-primary text-3xl overflow-hidden">
                            {[...comapany].map((letter, i) => (
                              <span
                                key={i}
                                className="inline-block whitespace-pre translate-y-full opacity-0 __jobcompanyName"
                              >
                                {letter}
                              </span>
                            ))}
                          </h3>
                          <p className="font-second text-sm">{role}</p>
                        </div>

                        <p className="text-xs font-title">{date}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:mt-28 mt-12 space-y-12 __clientTrigger">
                  <div className="space-y-2">
                    <h2 className="font-primary text-5xl __clientText opacity-0 translate-y-8">
                      Clients
                    </h2>
                    <p className="text-xm font-second __clientText opacity-0 translate-y-8">
                      I've been lucky to work with a real variety of clients
                      over the journey, I've listed some of the more notable
                      ones here.
                    </p>
                  </div>
                  <div className="__clientImageTrigger">
                    <ul className="grid grid-cols-3 gap-10">
                      {clientsData.map(({ logo, text }, i) => {
                        return (
                          <li
                            key={i}
                            className="__clientImages inline-block scale-0"
                          >
                            <img src={logo} alt={text} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
