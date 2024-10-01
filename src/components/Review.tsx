/* eslint-disable @next/next/no-img-element */
"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 20000, easing: (t: number) => t };

const Review = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
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
    <section className="mx-auto max-w-7xl w-full mt-12">
      <h3 className="font-semibold uppercase text-2xl my-3 underline text-center">
        Our Customer Reviews
      </h3>

      <div ref={ref} className="keen-slider mt-8 py-8 px-4">
        <div className="keen-slider__slide number-slide1 bg-[#FFFCE3] rounded-xl shadow-xl p-4 !w-[200px] md:!w-[300px] !max-w-none">
          <div className="flex items-center gap-3">
            <img
              src="user.svg"
              className="rounded-full"
              alt="realme"
              width={60}
              height={60}
            />
            <p>Rahul</p>
          </div>
          <p className="text-sm mt-3">
            Sold off my phone very easily and got the payment on the spot. Best
            experience so far.
          </p>
        </div>

        <div className="keen-slider__slide number-slide2 bg-[#FFFCE3] rounded-xl shadow-xl p-4 !w-[200px] md:!w-[300px] !max-w-none">
          <div className="flex items-center gap-3">
            <img
              src="user.svg"
              className="rounded-full"
              alt="realme"
              width={60}
              height={60}
            />
            <p>Ajay</p>
          </div>
          <p className="text-sm mt-3">
            Well trained staff. Overall a positive experience in selling my
            phone at Cashify.
          </p>
        </div>

        <div className="keen-slider__slide number-slide3 bg-[#FFFCE3] rounded-xl shadow-xl p-4 !w-[200px] md:!w-[300px] !max-w-none">
          <div className="flex items-center gap-3">
            <img
              src="user.svg"
              className="rounded-full"
              alt="realme"
              width={60}
              height={60}
            />
            <p>Naveen</p>
          </div>
          <p className="text-sm mt-3">
            No complaints, sold my phone very easily here. Definitely worth a
            try.
          </p>
        </div>

        <div className="keen-slider__slide number-slide4 bg-[#FFFCE3] rounded-xl shadow-xl p-4 !w-[200px] md:!w-[300px] !max-w-none">
          <div className="flex items-center gap-3">
            <img
              src="user.svg"
              className="rounded-full"
              alt="realme"
              width={60}
              height={60}
            />
            <p>Kunal</p>
          </div>
          <p className="text-sm mt-3">
            Sold off my phone very easily and got the payment on the spot. Best
            experience so far.
          </p>
        </div>

        <div className="keen-slider__slide number-slide4 bg-[#FFFCE3] rounded-xl shadow-xl p-4 !w-[200px] md:!w-[300px] !max-w-none">
          <div className="flex items-center gap-3">
            <img
              src="user.svg"
              className="rounded-full"
              alt="realme"
              width={60}
              height={60}
            />
            <p>Hemant</p>
          </div>
          <p className="text-sm mt-3">
            Sold off my phone very easily and got the payment on the spot. Best
            experience so far.
          </p>
        </div>

        <div className="keen-slider__slide number-slide4 bg-[#FFFCE3] rounded-xl shadow-xl p-4 !w-[200px] md:!w-[300px] !max-w-none">
          <div className="flex items-center gap-3">
            <img
              src="user.svg"
              className="rounded-full"
              alt="realme"
              width={60}
              height={60}
            />
            <p>Notorious</p>
          </div>
          <p className="text-sm mt-3">
            Sold off my phone very easily and got the payment on the spot. Best
            experience so far.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
