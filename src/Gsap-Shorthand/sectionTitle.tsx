import gsap, { Power4 } from "gsap";
import { SectionTitleProps } from "../types";

function sectionTitle(props: SectionTitleProps) {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: props.trigger,
        start: "top 40%",
      },
    })
    .to(props.class, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      stagger: {
        amount: 0.3,
        ease: Power4.easeOut,
      },
    });
}

export default sectionTitle;
