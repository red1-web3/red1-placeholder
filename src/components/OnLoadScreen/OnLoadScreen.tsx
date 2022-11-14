import { useEffect } from "react";
import gsap, { Back, Power4 } from "gsap";

export const onLoadTimeLine = gsap.timeline();

function OnLoadScreen() {
  useEffect(() => {
    onLoadTimeLine
      .to("._loaderBlackBackground", {
        top: "-100%",
        duration: 1.5,
      })
      .to("._loaderBlackBackground, ._loaderText, ._loaderTextParent", {
        opacity: 0,
      })
      .to(
        "._loaderWrapperBackground",
        {
          y: -10000,
          duration: 3.7,
          rotate: "random(100*100000)",
          ease: Power4.easeInOut,
          stagger: {
            from: "edges",
            grid: "auto",
            amount: 0.3,
            each: 0.4,
            ease: Power4.easeOut,
          },
        },
        "-=.5"
      )
      .to(".__loaderMainOverlay", { y: -1000 }, "-=2")
      .to("body", { overflowY: "auto" }, "-=3.2")
      .to(
        ".__logoMainText",
        {
          y: 0,
          opacity: 1,
          stagger: {
            amount: 0.4,
            from: "start",
          },
          duration: 0.3,
        },
        "-=2.7"
      )
      .to(
        ".__logoSubText",
        {
          y: 0,
          opacity: 1,
          stagger: {
            amount: 0.3,
            from: "start",
          },
          duration: 0.3,
        },
        "-=2.5"
      )
      .to(
        ".__navigationEffectGsap1, .__menuEffect",
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: {
            amount: 0.1,
            from: "start",
          },
        },
        "-=2.3"
      )
      .to(
        ".__navigationEffectGsap2",
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: {
            amount: 0.1,
            from: "start",
          },
        },
        "-=2.1"
      )
      .to(".__heroTxtWrapper", { opacity: 1, y: 0 }, "-=2")
      .to(
        ".__heroW1",
        { width: "80%", ease: Back.easeInOut.config(1.7), duration: 0.7 },
        "-=1.7"
      )
      .to(
        ".__heroW2",
        { height: "70%", ease: Back.easeInOut.config(1.7), duration: 0.7 },
        "-=1.6"
      )
      .to(
        ".__heroFrameTopBottom",
        {
          width: "110%",
          ease: Power4.easeInOut,
          duration: 0.7,
        },
        "-=1.4"
      )
      .to(
        ".__heroFrameLeftRight",
        {
          height: "100%",
          ease: Power4.easeInOut,
          duration: 0.7,
        },
        "-=1.4"
      )
      .to(
        ".__heroFrameImageSvg, .__fig1",
        {
          opacity: 0.7,
          y: 0,
          ease: "back",
          duration: 0.7,
          stagger: {
            amount: 0.2,
          },
        },
        "-=1.1"
      )
      .to("._loaderWrapperBackground", {
        display: "none",
      });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[2] flex items-center justify-center __loaderMainOverlay">
      <div className="font-title text-6xl md:text-2xl _loaderTextParent p-3 rounded-full text-black md:!text-[#F5E4BC] relative z-[2]">
        <span className="_loaderText">R1</span>
      </div>

      <div className="absolute top-0 left-0 w-full">
        <div className="h-screen gap-px grid-cols-[repeat(33,1fr)] hidden lg:grid">
          {[...Array(495).keys()].map((number) => (
            <span
              key={number}
              className="_loaderWrapperBackground text-white aspect-square rounded inline-block bg-black"
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OnLoadScreen;
