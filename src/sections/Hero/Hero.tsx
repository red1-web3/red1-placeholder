import HeroIcon from "../../components/icons/HeroIcon";

function Hero() {
  return (
    <section className="h-full">
      <div className="container grid gap-16 md:gap-28 grid-cols-1 md:grid-cols-2 lg::grid-cols-[460px,480px]">
        <div className="flex flex-row md:flex-col lg:flex-row gap-14 order-2 md:order-none">
          <ul className="space-y-1.5 hidden md:block">
            <li
              style={{ fontFamily: "cursive" }}
              className="__navigationEffectGsap2 -translate-x-12 opacity-0 text-[#222] !mb-3"
            >
              External
            </li>
            <li className="__navigationEffectGsap2 -translate-x-12 opacity-0 font-primary tracking-wider text-xl relative __navigationEffect">
              <a href="#">Facebook</a>
            </li>
            <li className="__navigationEffectGsap2 -translate-x-12 opacity-0 font-primary tracking-wider text-xl relative __navigationEffect">
              <a href="#">Instagram</a>
            </li>
            <li className="__navigationEffectGsap2 -translate-x-12 opacity-0 font-primary tracking-wider text-xl relative __navigationEffect">
              <a href="#">Youtube</a>
            </li>
          </ul>

          <div className="flex items-center flex-col justify-center grow">
            <div className="group relative hover:border-[#ba8d24] duration-300 py-4 w-full h-full flex justify-center items-center">
              <div className="opacity-0 __heroFrameImageSvg translate-y-6 group-hover:scale-105">
                <HeroIcon />
              </div>
              <span className="absolute inset-0 w-full h-full bg-[#ffc743]/0 group-hover:bg-[#ffc743]/10 duration-300"></span>

              <span className="absolute __heroFrameTopBottom -top-1 -right-3.5 w-0 h-1 bg-[#292823]/70"></span>
              <span className="absolute __heroFrameTopBottom -bottom-1 -left-3.5 w-0 h-1 bg-[#292823]/70"></span>

              <span className="absolute __heroFrameLeftRight -right-1 bottom-0 h-0 w-1 bg-[#292823]/70"></span>
              <span className="absolute __heroFrameLeftRight -left-1 top-0 h-0 w-1 bg-[#292823]/70"></span>
            </div>
            <span className="self-start font-second text-sm mt-1 __fig1 translate-y-6 opacity-0">
              Fig 1.
            </span>
          </div>
        </div>

        <article className="flex items-end __heroTxtWrapper opacity-0 translate-y-6 order-1 md:order-none">
          <div className="flex flex-col gap-5 md:-translate-y-4">
            <div className="flex items-start translate-y-2 lg:translate-y-0 lg:items-center gap-5">
              <span className="text-7xl font-primary h-32 relative inline-flex items-center justify-center aspect-square border-2 border-black leading-none">
                <span className="translate-y-1.5">W</span>
                <span className="absolute top-2.5 right-3 h-px bg-black inline-block w-0 __heroW1"></span>
                <span className="absolute bottom-2.5 left-3 h-px bg-black __heroW1 inline-block w-0"></span>
                <span className="absolute bottom-0 -translate-y-[18px] right-3.5 __heroW2 bg-black inline h-0 w-px"></span>
                <span className="absolute top-0 translate-y-[18px] left-3.5 __heroW2 bg-black inline w-px h-0"></span>
              </span>

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
