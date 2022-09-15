import gsap, { Back, Power4, Power2 } from "gsap";
import { useEffect, useRef, useState } from "react";
import DesignIcon from "../../components/icons/DesignIcon";
import Development from "../../components/icons/Development";
import descFirstLogoText from "../../Gsap-Shorthand/descFirstLogoText";
import learnMore from "../../Gsap-Shorthand/learnMore";
import sectionTitle from "../../Gsap-Shorthand/sectionTitle";

function Skills() {
  const [sectoinHeight, setSectoinHeight] = useState<number>(0);
  const skillsSection = useRef<any>(null);

  useEffect(() => {
    setSectoinHeight(skillsSection.current?.offsetHeight);
  }, [sectoinHeight]);

  useEffect(() => {
    const scroll4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".__skillImageFrameCont1",
        start: "top 60%",
      },
    });
    const scroll5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".__skillImageFrameCont2",
        start: "top 60%",
      },
    });

    sectionTitle({
      trigger: "._skillsTitleTrigger",
      class: ".__skillsTitle",
    }).to(
      "._skillLearnMorex",
      { opacity: 1, y: 0, ease: "back", stagger: { amount: 0.2 } },
      "-=.3",
    );

    descFirstLogoText({
      trigger: "._skillTextTrigger",
      class1: ".__skillF1",
      class2: ".__skillF2",
      wrapperClass: ".__skillTextWrapper",
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".__skillContainer",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    scroll4
      .to(".__skillFrameSvgTopBottom1", {
        width: "110%",
        ease: Back.easeInOut.config(1.7),
        duration: 1,
      })
      .to(
        ".__skillFrameImageSvgRightLeft1",
        {
          height: "100%",
          ease: Back.easeInOut.config(1.7),
          duration: 1,
        },
        "-=.9",
      )
      .to(".__skillFrameImageSvg1", {
        opacity: 1,
        y: 0,
        ease: "back",
      });
    scroll5
      .to(".__skillFrameSvgTopBottom2", {
        width: "110%",
        ease: Back.easeInOut.config(1.7),
        duration: 1,
      })
      .to(
        ".__skillFrameImageSvgRightLeft2",
        {
          height: "100%",
          ease: Back.easeInOut.config(1.7),
          duration: 1,
        },
        "-=.9",
      )
      .to(".__skillFrameImageSvg2", {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__skillFrameDesc1Cont",
          start: "top 80%",
        },
      })
      .to(".__skillFrameDesc1", {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.2,
          ease: "back",
        },
      })
      .to(".__humanDesign", {
        scale: 1.3,
        stagger: 0.1,
        ease: "back",
        duration: 0.3,
        letterSpacing: 20,
      })
      .to(".__humanDesign", {
        scale: 1,
        stagger: 0.1,
        ease: "back",
        duration: 0.3,
        letterSpacing: 0,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__skillFrameDesc2Cont",
          start: "top 80%",
        },
      })
      .to(".__skillFrameDesc2", {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.2,
          ease: "back",
        },
      });
    learnMore({ trigger: ".__skillContainer", class: ".__skillLearnMore" });
  }, []);

  return (
    <section ref={skillsSection}>
      <div className="container flex justify-between __skillContainer">
        <div className="space-y-5 _skillsTitleTrigger">
          <h1 className="__titleTxt overflow-hidden">
            {[..."Skills"].map((letter, i) => (
              <span
                key={i}
                className="inline-block translate-y-full __skillsTitle"
              >
                {letter}
              </span>
            ))}
          </h1>

          <div className="container-sm space-y-16 md:space-y-20 lg:space-y-24">
            <div className="overflow-hidden">
              <div className="space-y-5 md:w-[60%] translate-y-full __skillTextWrapper">
                <div className="flex items-start md:items-center gap-5 _skillTextTrigger">
                  <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                    <span className="translate-y-1.5">F</span>
                    <span className="absolute top-2.5 right-3 h-px bg-black inline-block w-0 __skillF1"></span>
                    <span className="absolute bottom-2.5 left-3 h-px bg-black __skillF1 inline-block w-0"></span>
                    <span className="absolute bottom-0 -translate-y-[18px] right-3.5 __skillF2 bg-black inline-block h-0 w-px"></span>
                    <span className="absolute top-0 translate-y-[18px] left-3.5 __skillF2 bg-black inline-block w-px h-0"></span>
                  </h2>
                  <p className="font-primary text-2xl">
                    rontend engineer thrive when designers understand how they
                    will be built. Just as an architect understands how a
                    structure is created, the same should be true on the web.
                  </p>
                </div>
                <p className="font-second">
                  I'm comfortable leading design direction, but I also enjoy
                  working alongside design and developement who are less
                  familiar with code. I enjoy collaborating, providing guidance
                  and helping push boundaries to create projects that catch the
                  eye, without sacrificing usability.
                </p>
              </div>
            </div>

            <div className="__columnGrid">
              <div className="space-y-5 __skillImageFrameCont1">
                <div className="flex items-center flex-col justify-center grow">
                  <span className="self-start font-second text-sm mb-2 opacity-0 __skillFrameImageSvg -translate-y-6">
                    Fig 2.
                  </span>
                  <div className="group relative hover:border-[#ba8d24] duration-300 py-4 w-full h-full flex justify-center items-center">
                    <div className="opacity-0 __skillFrameImageSvg1 translate-y-6 group-hover:scale-105">
                      <DesignIcon />
                    </div>
                    <span className="absolute inset-0 w-full h-full bg-[#ffc743]/0 group-hover:bg-[#ffc743]/10 duration-300"></span>

                    <span className="absolute __skillFrameSvgTopBottom1 -top-1 -right-3.5 w-0 h-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameSvgTopBottom1 -bottom-1 -left-3.5 w-0 h-1 bg-[#292823]/70"></span>

                    <span className="absolute __skillFrameImageSvgRightLeft1 -right-1 bottom-0 h-0 w-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameImageSvgRightLeft1 -left-1 top-0 h-0 w-1 bg-[#292823]/70"></span>
                  </div>
                </div>

                <div className="__skillFrameDesc1Cont">
                  <h3 className="font-primary text-3xl __skillFrameDesc1 opacity-0 translate-y-8">
                    Design
                  </h3>
                  <p className="font-second text-black/80 text-sm __skillFrameDesc1 opacity-0 translate-y-8">
                    Starting with a blank canvas, taking up a mouse (Fig 2) and
                    creating something bespoke is very rewarding. <br /> <br />{" "}
                    I design with usability in mind, striving to create projects
                    that are accessible to all. <br /> <br />
                    I'm comfortable with most design tools, but I often prefer
                    prototyping directly in a web browser. I'm passionate about
                    interaction animations.
                    <br /> <br />
                    <strong>
                      {" "}
                      <span className="__humanDesign inline-block">
                        Humane
                      </span>{" "}
                      <span className="__humanDesign inline-block">by</span>{" "}
                      <span className="__humanDesign inline-block">Design</span>
                    </strong>{" "}
                    is a real guiding force for the design work I do.
                  </p>
                </div>
              </div>
              <div className="space-y-5 md:mt-28 __skillImageFrameCont2">
                <div className="flex items-center flex-col justify-center grow">
                  <span className="self-start font-second text-sm mb-2 opacity-0 __skillFrameImageSvg -translate-y-6">
                    Fig 3.
                  </span>
                  <div className="group relative hover:border-[#ba8d24] duration-300 py-4 w-full h-full flex justify-center items-center">
                    <div className="opacity-0 __skillFrameImageSvg2 translate-y-6 group-hover:scale-105">
                      <Development />
                    </div>
                    <span className="absolute inset-0 w-full h-full bg-[#ffc743]/0 group-hover:bg-[#ffc743]/10 duration-300"></span>

                    <span className="absolute __skillFrameSvgTopBottom2 -top-1 -right-3.5 w-0 h-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameSvgTopBottom2 -bottom-1 -left-3.5 w-0 h-1 bg-[#292823]/70"></span>

                    <span className="absolute __skillFrameImageSvgRightLeft2 -right-1 bottom-0 h-0 w-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameImageSvgRightLeft2 -left-1 top-0 h-0 w-1 bg-[#292823]/70"></span>
                  </div>
                </div>
                <div className="__skillFrameDesc2Cont">
                  <h3 className="font-primary text-3xl __skillFrameDesc2 opacity-0 translate-y-8">
                    Development
                  </h3>
                  <p className="font-second text-black/80 text-sm __skillFrameDesc2 opacity-0 translate-y-8">
                    Developing a conceptual idea into something engaging and
                    functional can be equally satisfying. <br /> <br /> Each key
                    (Fig 3) stroke is carefully considered as I try to write
                    code that's simple and resilient.{" "}
                    <strong>Progressive Enhancement</strong> is the philosophy I
                    aim to work with. <br /> <br />
                    My approach is project dependant, aiming to select the right
                    tools for the job, rather than what's popular at the time.
                    <br /> <br />
                    I've worked with many modern JS frameworks, however I try to
                    stay focused on the fundamental building blocks of the web.
                    My go-to method at the moment is <strong>Jamstack.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center flex-col mt-[75px] relative _skillLearnMoreWrap hidden md:flex">
          <p className="rotate-90 _skillLearnMorex font-second whitespace-pre absolute top-0 opacity-0 -translate-y-5 -left-10">
            Learn More
          </p>
          <div className="__skillLearnMore _skillLearnMorex opacity-0 -translate-y-5 h-0 mt-[70px] w-0.5 bg-black relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before::h-2 before:aspect-square before:rounded-full before:bg-black before:p-1.5"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
