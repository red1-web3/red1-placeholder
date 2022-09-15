function Header() {
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
        <nav className="shrink md:hidden">
          <button className="w-8 relative h-[16px] __menuEffect -translate-y-12 opacity-0">
            <span className="absolute inline-block top-0 left-0 w-full h-0.5 bg-black"></span>
            <span className="absolute inline-block bottom-0 left-0 w-full h-0.5 bg-black"></span>
          </button>
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
