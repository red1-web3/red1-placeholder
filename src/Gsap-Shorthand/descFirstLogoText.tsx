import gsap, { Power4 } from "gsap";
import { DescFirstLogoProps } from "../types";

function descFirstLogoText({
  class1,
  class2,
  wrapperClass,
  trigger,
}: DescFirstLogoProps) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
      },
    })
    .to(wrapperClass, { y: 0, ease: Power4.easeOut })
    .to(class1, {
      width: "80%",
      ease: "back",
      duration: 0.7,
    })
    .to(
      class2,
      {
        height: "70%",
        ease: "back",
        duration: 0.7,
      },
      "-=.5",
    );
}

export default descFirstLogoText;
