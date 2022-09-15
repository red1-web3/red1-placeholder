import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { Autoplay, EffectCards } from "swiper";
import { sliderData } from "../../../constant";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        // grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper md:w-[700px]"
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        loop
      >
        {sliderData.map(({ image, url }, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="border-2 border-[#F5E4BC] overflow-hidden">
                <a href={url} className="group">
                  <img
                    className="h-full w-full object-cover duration-[400ms] ease-out"
                    src={image}
                    alt="Slider image"
                  />
                </a>
                <span className="absolute inline-block inset-0 h-full w-full bg-[#F5E4BC]/20 pointer-events-none"></span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
