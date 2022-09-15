import gsap, { Power4 } from "gsap";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".__footerBorderTrigger",
          start: "top bottom",
        },
      })
      .to(".__footerBorder", {
        width: "100%",
        duration: 2,
        ease: Power4.easeInOut,
      })
      .to(
        ".__footerItems",
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: {
            amount: 0.4,
          },
        },
        "-=1.5",
      );
  }, []);

  return (
    <footer>
      <div className="flex items-center justify-center __footerBorderTrigger">
        <div className="h-0.5 w-0 border-b-2 border-t-2 border-black __footerBorder"></div>
      </div>

      <div className="overflow-hidden">
        <nav className="container flex justify-between items-center py-[18px] md:py-[35px]">
          <a
            href="#"
            className="font-primary text-5xl inline-block -translate-y-full opacity-0 __footerItems"
          >
            Red1
          </a>

          <ul className="flex font-primary items-center justify-center gap-3 text-2xl">
            <li className="relative __navigationEffect inline-block -translate-y-full opacity-0 __footerItems">
              <a href="#">Writing</a>
            </li>
            <li className="relative __navigationEffect inline-block -translate-y-full opacity-0 __footerItems">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
