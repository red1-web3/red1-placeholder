import HeroIcon from "../../components/icons/HeroIcon";

function Hero() {
  return (
    <section className="h-full">
      <div className="container grid gap-28 grid-cols-[460px,480px]">
        <div className="flex gap-14">
          <ul className="space-y-1.5">
            <li style={{ fontFamily: "cursive" }} className="opacity-90 !mb-3">
              External
            </li>
            <li className="font-primary tracking-wider text-xl relative __navigationEffect">
              <a href="#">Facebook</a>
            </li>
            <li className="font-primary tracking-wider text-xl relative __navigationEffect">
              <a href="#">Instagram</a>
            </li>
            <li className="font-primary tracking-wider text-xl relative __navigationEffect">
              <a href="#">Youtube</a>
            </li>
          </ul>

          <div className="flex items-center flex-col justify-center grow">
            <div className="group relative hover:border-[#ba8d24] duration-300 border-2 border-black py-4 w-full h-full flex justify-center items-center">
              <div className="opacity-70 group-hover:scale-105 ease-in-out duration-300">
                <HeroIcon />
              </div>
              <span className="absolute inset-0 w-full h-full bg-[#ffc743]/0 group-hover:bg-[#ffc743]/10 duration-300"></span>
            </div>
            <span className="self-start font-second text-sm">Fig 1.</span>
          </div>
        </div>

        <article className="flex items-end">
          <div className="flex flex-col gap-5 md:-translate-y-4">
            <div className="flex items-center gap-5">
              <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                <span className="translate-y-1.5">W</span>
                <span className="absolute top-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                <span className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                <span className="absolute top-1/2 -translate-y-1/2 right-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
              </h2>

              <div className="font-primary text-2xl">
                elcome! I'm Red1 — a frontend engineer and coder who creates
                things with computers (Fig 1.) and Digital technology best
                describes my skill set.
              </div>
            </div>

            <p className="font-second">
              I'm detail-oriented and specialise in building design systems,
              component libraries and creating digital design. I've worked in
              digital agencies and as a freelancer for over 2 years. Currently,
              I'm a Senior Creative Developer at{" "}
              <a className="underline" href="#">
                IMA Home
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero;
