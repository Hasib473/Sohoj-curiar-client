import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../assets/hero/hero1.png";
import banner2 from "../../assets/hero/hero2.png";
import banner3 from "../../assets/hero/hero3.png";

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
      >
        {/* Slide 1 */}
        <div className="relative">
          <img
            className="h-[400px] md:h-[500px] w-full object-cover"
            src={banner1}
            alt="banner1"
          />

          {/* Overlay */}
          <div className="absolute gap-3 inset-0 bg-black/40 flex items-end pl-28 pb-8">
            <a
              className="btn bg-[#0F75B8] text-white px-6 py-2 rounded-lg hover:bg-[#0c5e94] transition"
              href="#"
            >
              Track Your Parcel
            </a>
            <a
              className="btn bg-[#F97316] text-white px-6 py-2 rounded-lg hover:bg-[#0c5e94] transition"
              href="#"
            >
              Be a Rider
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="h-[400px] md:h-[500px] w-full object-cover"
            src={banner2}
            alt="banner2"
          />
         
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            className="h-[400px] md:h-[500px] w-full object-cover"
            src={banner3}
            alt="banner3"
          />
         
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
