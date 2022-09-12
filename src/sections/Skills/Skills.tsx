import gsap, { Back, Power4 } from "gsap";
import { useEffect, useRef, useState } from "react";
import DesignIcon from "../../components/icons/DesignIcon";
import Development from "../../components/icons/Development";

function Skills() {
  const [sectoinHeight, setSectoinHeight] = useState<number>(0);
  const skillsSection = useRef<any>(null);

  useEffect(() => {
    setSectoinHeight(skillsSection.current?.offsetHeight);
  }, [sectoinHeight]);

  useEffect(() => {
    const scroll1 = gsap.timeline({
      scrollTrigger: {
        trigger: "._skillsTitleTrigger",
        start: "top 60%",
      },
    });
    const scroll2 = gsap.timeline({
      scrollTrigger: {
        trigger: "._skillTextTrigger",
        start: "top 90%",
      },
    });
    const scroll3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".__skillContainer",
        endTrigger: "._skillLearnMoreWrap",
        start: "20% 50%",
        scrub: 20,
      },
    });
    const scroll4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".__skillImageFrameCont",
        start: "top 50%",
      },
    });

    scroll1.to(".__skillsTitle", {
      y: 0,
      duration: 0.5,
      opacity: 1,
      stagger: {
        amount: 0.3,
        ease: Power4.easeOut,
      },
    });
    scroll2
      .to(".__skillTextWrapper", { y: 0, ease: Power4.easeOut })
      .to(".__skillF1", {
        width: "80%",
        ease: Power4.easeInOut,
        duration: 0.3,
      })
      .to(
        ".__skillF4",
        {
          height: "70%",
          ease: Power4.easeInOut,
          duration: 0.3,
        },
        "-=.1",
      )

      .to(
        ".__skillF3",
        {
          width: "80%",
          ease: Power4.easeInOut,
          duration: 0.3,
        },
        "-=.2",
      )
      .to(
        ".__skillF2",
        {
          height: "70%",
          ease: Power4.easeInOut,
          duration: 0.3,
        },
        "-=.3",
      );

    scroll3.to(".__skillLearnMore", {
      height: "100%",
      ease: "back",
    });

    scroll4
      .to(".__skillFrameSvgTopBottom", {
        width: "110%",
        ease: Power4.easeOut,
        duration: 0.5,
      })
      .to(".__skillFrameImageSvgRightLeft", {
        height: "100%",
        ease: Power4.easeOut,
        duration: 0.5,
      })
      .to(".__skillFrameImageSvg", {
        opacity: 1,
        y: 0,
        ease: "back",
      });
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

          <div className="container-sm space-y-24">
            <div className="overflow-hidden">
              <div className="space-y-5 w-[60%] translate-y-full __skillTextWrapper">
                <div className="flex items-center gap-5 _skillTextTrigger">
                  <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                    <span className="translate-y-1.5">F</span>
                    <span className="absolute top-2.5 right-3 h-px bg-black inline-block w-0 __skillF1"></span>
                    <span className="absolute bottom-2.5 left-3 h-px bg-black __skillF3 inline-block w-0"></span>
                    <span className="absolute top-4.5 right-3.5 __skillF2 bg-black inline h-0 w-px"></span>
                    <span className="absolute bottom-4.5 left-3.5 __skillF4 bg-black inline w-px h-0"></span>
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

            <div className="__columnGrid __skillImageFrameCont">
              <div className="space-y-5">
                <div className="flex items-center flex-col justify-center grow">
                  <span className="self-start font-second text-sm mb-2 opacity-0 __skillFrameImageSvg -translate-y-6">
                    Fig 2.
                  </span>
                  <div className="group relative hover:border-[#ba8d24] duration-300 py-4 w-full h-full flex justify-center items-center">
                    <div className="opacity-0 __skillFrameImageSvg translate-y-6 group-hover:scale-105">
                      <DesignIcon />
                    </div>
                    <span className="absolute inset-0 w-full h-full bg-[#ffc743]/0 group-hover:bg-[#ffc743]/10 duration-300"></span>

                    <span className="absolute __skillFrameSvgTopBottom -top-1 -right-3.5 w-0 h-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameSvgTopBottom -bottom-1 -left-3.5 w-0 h-1 bg-[#292823]/70"></span>

                    <span className="absolute __skillFrameImageSvgRightLeft -right-1 bottom-0 h-0 w-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameImageSvgRightLeft -left-1 top-0 h-0 w-1 bg-[#292823]/70"></span>
                  </div>
                </div>

                <h3 className="font-primary text-3xl">Design</h3>
                <p className="font-second opacity-80 text-sm">
                  Starting with a blank canvas, taking up a mouse (Fig 2) and
                  creating something bespoke is very rewarding. <br /> <br /> I
                  design with usability in mind, striving to create projects
                  that are accessible to all. <br /> <br />
                  I'm comfortable with most design tools, but I often prefer
                  prototyping directly in a web browser. I'm passionate about
                  interaction animations.
                  <br /> <br />
                  <strong> Humane by Design</strong> is a real guiding force for
                  the design work I do.
                </p>
              </div>
              <div className="space-y-5 mt-28">
                <div className="flex items-center flex-col justify-center grow">
                  <span className="self-start font-second text-sm mb-2 opacity-0 __skillFrameImageSvg -translate-y-6">
                    Fig 3.
                  </span>
                  <div className="group relative hover:border-[#ba8d24] duration-300 py-4 w-full h-full flex justify-center items-center">
                    <div className="opacity-0 __skillFrameImageSvg translate-y-6 group-hover:scale-105">
                      <Development />
                    </div>
                    <span className="absolute inset-0 w-full h-full bg-[#ffc743]/0 group-hover:bg-[#ffc743]/10 duration-300"></span>

                    <span className="absolute __skillFrameSvgTopBottom -top-1 -right-3.5 w-0 h-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameSvgTopBottom -bottom-1 -left-3.5 w-0 h-1 bg-[#292823]/70"></span>

                    <span className="absolute __skillFrameImageSvgRightLeft -right-1 bottom-0 h-0 w-1 bg-[#292823]/70"></span>
                    <span className="absolute __skillFrameImageSvgRightLeft -left-1 top-0 h-0 w-1 bg-[#292823]/70"></span>
                  </div>
                </div>

                <h3 className="font-primary text-3xl">Development</h3>
                <p className="font-second opacity-80 text-sm">
                  Developing a conceptual idea into something engaging and
                  functional can be equally satisfying. <br /> <br /> Each key
                  (Fig 3) stroke is carefully considered as I try to write code
                  that's simple and resilient.{" "}
                  <strong>Progressive Enhancement</strong> is the philosophy I
                  aim to work with. <br /> <br />
                  My approach is project dependant, aiming to select the right
                  tools for the job, rather than what's popular at the time.
                  <br /> <br />
                  I've worked with many modern JS frameworks, however I try to
                  stay focused on the fundamental building blocks of the web. My
                  go-to method at the moment is <strong>Jamstack.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col mt-[75px] relative _skillLearnMoreWrap">
          <p className="rotate-90 font-second whitespace-pre absolute top-0 -left-10">
            Learn More
          </p>
          <div className="__skillLearnMore h-0 mt-16 w-0.5 bg-black relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before::h-2 before:aspect-square before:rounded-full before:bg-black before:p-1.5"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
