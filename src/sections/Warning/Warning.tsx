import DesignIcon from "../../components/icons/DesignIcon";
import Development from "../../components/icons/Development";

function Skills() {
  return (
    <section>
      <div className="container flex justify-between">
        <div className="space-y-5">
          <h1 className="__titleTxt !text-[15rem]">Warning</h1>

          <div className="container-sm space-y-24">
            <div className="space-y-5 w-[60%]">
              <div className="flex items-center gap-5">
                <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                  <span className="translate-y-1.5">E</span>
                  <span className="absolute top-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                  <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                  <span className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                  <span className="absolute top-1/2 -translate-y-1/2 right-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                </h2>
                <p className="font-primary text-2xl">
                  nough about 'skills' and work stuff. Here are some ideas taken
                  from my brain and arranged into words. Hopefully someone finds
                  them useful.
                </p>
              </div>
              <p className="font-second">
                At the moment, I only have one lonely post, written in
                conjunction with launching this site. I'm aiming to allow myself
                time to do more of this moving forward.
              </p>
            </div>

            <div className="flex flex-col items-end">
              <div className="w-[60%] space-y-5">
                <h2 className="font-primary text-5xl">Getting personal</h2>
                <p className="text-sm font-second">
                  Creating a personal website is something I've started many
                  times before, usually ending up bored with the idea and
                  unhappy with the outcome. Having finally released something
                  I'm pleased with, I thought it worth exploring my initial
                  thought process in this opening post... Read full post.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col mt-[75px] relative">
          <p className="rotate-90 font-second whitespace-pre absolute top-0 -left-10">
            Learn More
          </p>
          <div className="h-full mt-16 w-0.5 bg-black relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before::h-2 before:aspect-square before:rounded-full before:bg-black before:p-1.5"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
