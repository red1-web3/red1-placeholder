import DesignIcon from "../../components/icons/DesignIcon";
import Development from "../../components/icons/Development";

function Skills() {
  return (
    <section>
      <div className="container flex justify-between">
        <div className="space-y-5">
          <h1 className="leading-none tracking-wide uppercase font-title pl-24 __titleTxt">
            Skills
          </h1>

          <div className="container-sm space-y-16">
            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                  <span className="translate-y-1.5">F</span>
                  <span className="absolute top-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                  <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                  <span className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                  <span className="absolute top-1/2 -translate-y-1/2 right-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                </h2>
                <p className="font-primary text-2xl">
                  rontend engineer thrive when designers understand how they
                  will be built. Just as an architect understands how a
                  structure is created, the same should be true on the web.
                </p>
              </div>
              <p className="font-second">
                I'm comfortable leading design direction, but I also enjoy
                working alongside design and developement who are less familiar
                with code. I enjoy collaborating, providing guidance and helping
                push boundaries to create projects that catch the eye, without
                sacrificing usability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-14">
              <div className="space-y-5">
                <div className="border-2 border-black flex items-center justify-center py-5">
                  <div className="opacity-80">
                    <DesignIcon />
                  </div>
                </div>
                <h3 className="font-primary text-3xl">Design</h3>
                <p className="font-second opacity-80 text-sm">
                  Starting with a blank canvas, taking up a mouse (Fig 2) and
                  creating something bespoke is very rewarding. <br /> <br /> I
                  design with usability in mind, striving to create projects
                  that are accessible to all. <br /> <br />
                  I'm comfortable with most design tools, but I often prefer
                  prototyping directly in a web browser. I'm passionate about
                  interaction animations.
                  <br /> <br />
                  <strong> Humane by Design</strong> is a real guiding force for
                  the design work I do.
                </p>
              </div>
              <div className="space-y-5 mt-28">
                <div className="border-2 border-black flex items-center justify-center py-5">
                  <div className="opacity-80">
                    <Development />
                  </div>
                </div>
                <h3 className="font-primary text-3xl">Development</h3>
                <p className="font-second opacity-80 text-sm">
                  Developing a conceptual idea into something engaging and
                  functional can be equally satisfying. <br /> <br /> Each key
                  (Fig 3) stroke is carefully considered as I try to write code
                  that's simple and resilient.{" "}
                  <strong>Progressive Enhancement</strong> is the philosophy I
                  aim to work with. <br /> <br />
                  My approach is project dependant, aiming to select the right
                  tools for the job, rather than what's popular at the time.
                  <br /> <br />
                  I've worked with many modern JS frameworks, however I try to
                  stay focused on the fundamental building blocks of the web. My
                  go-to method at the moment is <strong>Jamstack.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 flex-col mt-[75px]">
          <p className="rotate-90 font-second whitespace-pre">Learn More</p>
          <div className="h-full w-0.5 bg-black"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
