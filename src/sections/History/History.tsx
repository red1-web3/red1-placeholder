import { clientsData, jobCompanyName } from "../../constant";

function Skills() {
  return (
    <section>
      <div className="container flex justify-between">
        <div className="flex items-center flex-col mt-[75px] relative">
          <p className="rotate-90 font-second whitespace-pre absolute top-0 -left-10">
            Learn More
          </p>
          <div className="h-full w-0.5 mt-16 bg-black relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before::h-2 before:aspect-square before:rounded-full before:bg-black before:p-1.5"></div>
        </div>
        <div className="space-y-5">
          <h1 className="__titleTxt !text-[17rem]">History</h1>

          <div className="container-sm">
            <div className="flex items-end flex-col space-y-24">
              <div className="space-y-5 w-[60%]">
                <div className="flex items-center gap-5">
                  <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                    <span className="translate-y-1.5">F</span>
                    <span className="absolute top-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                    <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                    <span className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                    <span className="absolute top-1/2 -translate-y-1/2 right-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                  </h2>
                  <p className="font-primary text-2xl">
                    or over a decade, I've worked in a variety of roles. My most
                    recent interesting job was building a new design system &
                    component library for one of my client project.
                  </p>
                </div>
                <p className="font-second">
                  Recently I learned some of new technology for animating
                  website, the name are listed below.{" "}
                  <strong>Green sock aniamtion</strong>,
                  <strong>Three js</strong>, <strong>WebGl</strong>,
                  <strong>Spline js 3D</strong>, <strong>Anime js</strong>
                </p>
              </div>

              <div className="__columnGrid w-full">
                <div>
                  <ul className="space-y-12">
                    {jobCompanyName.map(({ comapany, date, role }, i) => (
                      <li key={i} className="flex justify-between items-end">
                        <div>
                          <h3 className="font-primary text-3xl">{comapany}</h3>
                          <p className="font-second text-sm">{role}</p>
                        </div>

                        <p className="text-xs font-title">{date}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-28 space-y-12">
                  <div className="space-y-2">
                    <h2 className="font-primary text-5xl">Clients</h2>
                    <p className="text-xm font-second">
                      I've been lucky to work with a real variety of clients
                      over the journey, I've listed some of the more notable
                      ones here.
                    </p>
                  </div>
                  <ul className="grid grid-cols-3 gap-10">
                    {clientsData.map(({ logo, text }, i) => {
                      return (
                        <li key={i}>
                          <img src={logo} alt={text} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
