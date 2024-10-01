"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const animation = { duration: 8000, easing: (t: number) => t };

const Strap: React.FC = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    // mode: "free",
    slides: {
      perView: 7,
      spacing: 15,
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={ref} className="keen-slider mt-12">
      <div className="keen-slider__slide number-slide1">
        <Image src="realme.svg" width={120} height={120} alt="realme" />
      </div>

      <div className="keen-slider__slide number-slide2">
        <Image src="google.svg" width={120} height={120} alt="google" />
      </div>

      <div className="keen-slider__slide number-slide3">
        <Image src="poco.svg" width={120} height={120} alt="poco" />
      </div>

      <div className="keen-slider__slide number-slide4">
        <Image src="lenovo.svg" width={120} height={120} alt="lenovo" />
      </div>

      <div className="keen-slider__slide number-slide5">
        <Image src="infinix.svg" width={120} height={120} alt="infinix" />
      </div>

      <div className="keen-slider__slide number-slide6">
        <Image src="iqoo.svg" width={120} height={120} alt="iqoo" />
      </div>

      <div className="keen-slider__slide number-slide7">
        <Image src="honor.svg" width={120} height={120} alt="honor" />
      </div>

      <div className="keen-slider__slide number-slide8">
        <Image src="techno.svg" width={120} height={120} alt="techno" />
      </div>

      <div className="keen-slider__slide number-slide9">
        <Image src="nokia.svg" width={120} height={120} alt="nokia" />
      </div>

      <div className="keen-slider__slide number-slide10">
        <Image src="motorola.svg" width={120} height={120} alt="motorola" />
      </div>

      <div className="keen-slider__slide number-slide11">
        <Image src="samsung.svg" width={120} height={120} alt="samsung" />
      </div>

      <div className="keen-slider__slide number-slide12">
        <Image src="oneplus.svg" width={120} height={120} alt="oneplus" />
      </div>

      <div className="keen-slider__slide number-slide13">
        <Image src="mi.svg" width={120} height={120} alt="mi" />
      </div>

      <div className="keen-slider__slide number-slide14">
        <Image src="oppo.svg" width={120} height={120} alt="oppo" />
      </div>
    </div>
  );
};

export default Strap;
