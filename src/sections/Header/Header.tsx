import React from "react";

function Header() {
  return (
    <header className="font-primary py-5">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col items-center">
          <a href="#" className="text-[44px] tracking-wide">
            Red1 Placeholder
          </a>
          <span className="text-[22px] tracking-wider -mt-[22px] opacity-90 font-light self-end mr-2">
            Frontend engineer
          </span>
        </div>

        <nav>
          <ul className="flex items-center justify-center gap-3 text-2xl">
            <li className="relative __navigationEffect">
              <a href="#">Writing</a>
            </li>
            <li className="relative __navigationEffect">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
