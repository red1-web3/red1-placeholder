import gsap, { Back, Power0, Power4 } from "gsap";
import { useEffect, useState } from "react";

function OnLoadScreen() {
  const [isPausedBg, setIsPausedBg] = useState(true);
  const [isPausedHeroAnimation, setIsPausedHeroAnimation] = useState(true);

  // Name Logo Animate
  useEffect(() => {
    gsap
      .timeline({
        onComplete: () => {
          setIsPausedBg(false);
        },
      })
      .to(".__door", {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.7,
        ease: Power0.easeInOut,
      })
      .to("._loaderText", { clipPath: "inset(0 50% 0 50%)" }, "+=.6");
  }, []);

  // Background Animate
  useEffect(() => {
    gsap.to("._loaderWrapperBackgroundTop", {
      yPercent: -100,
      duration: 1,
      ease: Power4.easeInOut,
      paused: isPausedBg,
      onComplete: () => setIsPausedHeroAnimation(false),
      stagger: {
        each: 0.1,
        from: "end",
      },
    });
    gsap.to("._loaderWrapperBackgroundBottom", {
      yPercent: 100,
      duration: 1,
      ease: Power4.easeInOut,
      paused: isPausedBg,
      stagger: 0.1,
    });
  }, [isPausedBg]);

  useEffect(() => {
    gsap
      .timeline({
        paused: isPausedHeroAnimation,
      })
      .to(document.body, { overflowY: "auto" })
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
        "start"
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
        "start"
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
        "start"
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
        "start"
      )
      .to(".__heroTxtWrapper", { opacity: 1, y: 0, delay: 0.4 }, "start")
      .to(
        ".__heroW1",
        {
          width: "80%",
          ease: Back.easeInOut.config(1.7),
          duration: 0.7,
          delay: 0.5,
        },
        "start"
      )
      .to(
        ".__heroW2",
        {
          height: "70%",
          ease: Back.easeInOut.config(1.7),
          duration: 0.7,
          delay: 0.5,
        },
        "start"
      )
      .to(
        ".__heroFrameTopBottom",
        {
          width: "110%",
          ease: Power4.easeInOut,
          duration: 0.7,
          delay: 0.5,
        },
        "start"
      )
      .to(
        ".__heroFrameLeftRight",
        {
          height: "100%",
          ease: Power4.easeInOut,
          duration: 0.7,
          delay: 0.5,
        },
        "start"
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
        "start"
      );
  }, [isPausedHeroAnimation]);

  return (
    <div className="fixed pointer-events-none top-0 left-0 w-screen h-screen z-[2] flex items-center justify-center __loaderMainOverlay">
      <div className="font-title text-3xl md:text-2xl _loaderTextParent p-3 rounded-full text-black md:!text-[#F5E4BC] relative z-[2]">
        <div className="_loaderText p-3 aspect-square bg-black border border-primary relative text-white md:text-primary md:__glowTextEffect">
          R1
          <div className="absolute inset-0 m-auto flex">
            <div
              style={{ clipPath: "inset(0 0 0 0)" }}
              className="w-[102%] __door h-[102%] bg-primary"
            ></div>
            <div
              style={{ clipPath: "inset(0 0 0 0)" }}
              className="w-[102%] __door h-[102%] bg-primary rotate-180"
            ></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full">
        <div className="h-screen gap-[.08vw] grid-cols-2 grid">
          <span className="_loaderWrapperBackgroundTop h-[50vh] w-[50vw] text-white aspect-square inline-block bg-black"></span>

          <span className="_loaderWrapperBackgroundTop h-[50vh] w-[50vw] text-white aspect-square inline-block bg-black"></span>

          <span className="_loaderWrapperBackgroundBottom h-[50vh] w-[50vw] text-white aspect-square inline-block bg-black"></span>

          <span className="_loaderWrapperBackgroundBottom h-[50vh] w-[50vw] text-white aspect-square inline-block bg-black"></span>
        </div>
      </div>
    </div>
  );
}

export default OnLoadScreen;
