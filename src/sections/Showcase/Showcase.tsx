import ShowcaseSlider from "../../components/Slider/ShowcaseSlider";

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
          <h1 className="__titleTxt !text-[13rem]">Showcase</h1>

          <div className="container-sm space-y-24">
            <div className="space-y-5 w-[60%]">
              <div className="flex items-center gap-5">
                <h2 className="text-7xl font-primary h-32 relative flex items-center justify-center aspect-square border-2 border-black leading-none">
                  <span className="translate-y-1.5">I</span>
                  <span className="absolute top-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                  <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-px bg-black inline-block w-[80%]"></span>
                  <span className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                  <span className="absolute top-1/2 -translate-y-1/2 right-[calc(50%+5px)] bg-black inline-block h-px w-[70%] rotate-90"></span>
                </h2>
                <p className="font-primary text-2xl">
                  would like to play with code and make new web app its give me
                  much happiness so, here in this section you can see my more
                  websites demo & link you can visit to click.
                </p>
              </div>
              <p className="font-second">
                If you learn code the you can do anything with that, you have to
                provably need to know how to make condition and write better
                code, and also you need give some pateint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-20 space-y-8">
        <h3 className="text-5xl font-primary text-center">Demos</h3>
        <ShowcaseSlider />
      </div>
    </section>
  );
}

export default Skills;
