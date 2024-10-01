/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "./ui/button";

interface HeroProps {
  isBannerVisible?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isBannerVisible = true }) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-7xl w-full relative flex flex-wrap sm:flex-nowrap items-center sm:justify-between py-4 px-2 gap-6 sm:gap-0">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-normal gap-6 sm:gap-16">
          <Link
            href="/"
            className="flex flex-col items-center justify-center hover:text-amber-500 transition-all"
          >
            Home
          </Link>

          <Link
            href="/sell-phone"
            className="flex flex-col items-center justify-center hover:text-amber-500 transition-all"
          >
            Sell phone
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center justify-center hover:text-amber-500 transition-all"
          >
            Buy phone
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center justify-center hover:text-amber-500 transition-all"
          >
            Sell Gadget
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center justify-center hover:text-amber-500 transition-all"
          >
            B2B
          </Link>

          <div className="cursor-pointer flex md:hidden flex-col items-center justify-center">
            Select City
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center cursor-pointer">
          Select City
        </div>
      </div>

      <div className="w-full border-b border-gray-400 h-[.5px] rounded-md mb-4" />

      <div className="mx-auto max-w-7xl w-full relative">
        {isBannerVisible && (
          <>
            <Swiper
              navigation={false}
              modules={[Autoplay, Navigation]}
              className="select-none"
              ref={sliderRef}
              loop={true}
              autoplay={{ delay: 2000 }}
            >
              <SwiperSlide>
                <img
                  src="/banner.svg"
                  className="w-full object-cover rounded-lg"
                  alt="banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/banner2.svg"
                  className="w-full object-cover rounded-lg"
                  alt="banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/banner3.svg"
                  className="w-full object-cover rounded-lg"
                  alt="banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/banner4.svg"
                  className="w-full object-cover rounded-lg"
                  alt="banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/banner5.svg"
                  className="w-full object-cover rounded-lg"
                  alt="banner"
                />
              </SwiperSlide>
            </Swiper>

            <Button
              onClick={handlePrev}
              className="absolute top-[45%] p-0 z-10 -left-6 h-12 w-12 rounded-full bg-white text-black/60 shadow-md hover:bg-gray-200 border backdrop-blur-3xl bg-white/75"
            >
              <ChevronLeft size={30} />
            </Button>
            <Button
              onClick={handleNext}
              className="absolute top-[45%] p-0 z-10 -right-6 h-12 w-12 rounded-full bg-white text-black/60 shadow-md hover:bg-gray-200 border backdrop-blur-3xl bg-white/75"
            >
              <ChevronRight size={30} />
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
