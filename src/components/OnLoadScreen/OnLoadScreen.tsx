import { useEffect } from "react";
import gsap, { Power4 } from "gsap";

function OnLoadScreen() {
  const onLoadTimeLine = gsap.timeline();

  useEffect(() => {
    onLoadTimeLine
      .to("._loaderBlackBackground", {
        top: "-100%",
        duration: 2,
      })
      .to("._loaderBlackBackground, ._loaderText", { opacity: 0 })
      .to(
        "._loaderWrapperBackground",
        {
          y: -10000,
          duration: 0.7,
          rotate: "random(100*100000)",
          ease: Power4.easeInOut,
          stagger: {
            from: "random",
            grid: "auto",
            amount: 0.3,
            each: 0.4,
            ease: Power4.easeOut,
          },
        },
        "-=.5",
      )
      .to("body", { overflowY: "auto" })
      .to("._loaderWrapperBackground", { display: "none" });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-[111] flex items-center justify-center">
      <div className="font-title text-5xl text-[#F5E4BC] relative z-[222]">
        <span className="_loaderText"> R1</span>
        <span className="absolute top-0 left-0 h-full w-full bg-black _loaderBlackBackground"></span>
      </div>

      <div className="absolute top-0 left-0 w-full">
        <div className="grid grid-cols-[repeat(33,1fr)]">
          {[...Array(495).keys()].map((number) => (
            <span
              key={number}
              className="_loaderWrapperBackground text-white aspect-square inline-block bg-black"
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OnLoadScreen;
