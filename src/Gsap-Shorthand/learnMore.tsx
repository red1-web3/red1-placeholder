import gsap, { Power4 } from "gsap";
import { LearnMoreProps } from "../types";

function learnMore(props: LearnMoreProps) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: props.trigger,
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      },
    })
    .to(props.class, {
      ease: Power4.easeInOut,
      height: "100%",
    });
}

export default learnMore;
