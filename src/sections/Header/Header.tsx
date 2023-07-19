import classNames from "classnames";
import { useState } from "react";

function Header() {
  const [activeMobileNav, setActiveMobileNav] = useState(false);

  return (
    <header className="font-primary py-3 md:py-5">
      <div className="container flex items-center justify-between w-full">
        <a href="#" className="flex flex-col gap-1 md:gap-0 items-center">
          <div className="text-[34px] md:text-[44px] tracking-wide">
            {[..."Red1 Placeholder"].map((letter, i) => (
              <span
                key={i}
                className="__logoMainText opacity-0 inline-block translate-y-6 whitespace-pre"
              >
                {letter}
              </span>
            ))}
          </div>
          <span className="text-[20px] md:text-[22px] tracking-wider -mt-[22px] opacity-90 font-light self-end mr-2">
            {[..."Frontend engineer"].map((letter, i) => (
              <span
                key={i}
                className="__logoSubText opacity-0 inline-block translate-y-6 whitespace-pre"
              >
                {letter}
              </span>
            ))}
          </span>
        </a>
        {/* Mobile nav --Start-- */}
        <nav className="shrink md:hidden relative">
          <button
            onClick={() => setActiveMobileNav((prev) => !prev)}
            className="focus:border-2 focus:border-[#ecc979] focus:box-border focus:border-dashed h-[46px] aspect-square flex items-center justify-center relative z-[20]"
          >
            <div className="w-6 relative h-[16px] __menuEffect -translate-y-12 opacity-0 z-[11]">
              <span
                className={classNames(
                  "absolute inline-block duration-100 ease-out top-[10%] left-0 w-full h-0.5 bg-black",
                  activeMobileNav &&
                    "rotate-45 !top-1/2 -translate-y-1/2 bg-primary"
                )}
              ></span>
              <span
                className={classNames(
                  "absolute inline-block duration-100 ease-out bottom-[10%] left-0 w-full h-0.5 bg-black",
                  activeMobileNav &&
                    "-rotate-45 !top-1/2 -translate-y-1/2 bg-primary"
                )}
              ></span>
            </div>
          </button>

          <ul
            className={classNames(
              "scale-0 origin-top-right duration-100 ease-out items-center justify-center w-[230px] aspect-square z-[10] text-2xl flex flex-col bg-[#292823] shadow pb-5 pl-5 pt-10 pr-10 absolute top-0.5 right-0.5 gap-5",
              activeMobileNav && "scale-100 translate-x-0 translate-y-0"
            )}
          >
            <li className="relative text-4xl text-primary">
              <a href="#" className="tracking-wider">
                Writing
              </a>
            </li>
            <li className="relative text-4xl text-primary">
              <a href="#" className="tracking-wider">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile nav --End-- */}

        <nav className="hidden md:block">
          <ul className="items-center justify-center gap-3 text-2xl flex">
            <li className="relative __navigationEffect -translate-y-12 opacity-0 __navigationEffectGsap1">
              <a href="#">Writing</a>
            </li>
            <li className="relative __navigationEffect -translate-y-12 opacity-0 __navigationEffectGsap1">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
