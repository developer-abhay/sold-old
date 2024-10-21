import React from "react";
import Image from "next/image";
import SearchByName from "./SearchByName";

const ChooseBrand: React.FC<any> = ({
  brands,
  setMoreBrands,
  setSelectBrand,
}) => {
  return (
    <div className="w-full mx-auto max-w-7xl border-2 rounded-lg px-6 pt-12 pb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center gap-[2rem] w-full sm:w-[50%]">
          <h3 className="text-4xl font-semibold">
            Sell Your Moble Phone For Instant Cash
          </h3>

          <SearchByName setSelectBrand={setSelectBrand} brands={brands} />

          <div className="flex items-center justify-center w-full">
            <div className="mx-auto w-full bg-black border-[0.8px] border-black rounded-full" />
            <p className="w-[26rem] text-center text-sm">Or Choose A Brand</p>
            <div className="mx-auto w-full bg-black border-[0.8px] border-black rounded-full" />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-3 w-full">
            {brands.map((item: any) => {
              return (
                <div
                  key={item.brandName}
                  className="h-24 w-24 rounded-xl overflow-hidden"
                >
                  <Image
                    onClick={() => setSelectBrand(item.brandName)}
                    className="cursor-pointer hover:scale-[1.1] transition-all"
                    src={item.brandLogo}
                    alt={item.brandName}
                    width={96}
                    height={96}
                  />
                </div>
              );
            })}
            <button
              className="underline cursor-pointer"
              onClick={() => {
                setMoreBrands(true);
              }}
            >
              More Brand
            </button>
          </div>
        </div>

        <div className="relative h-[198px] w-full sm:w-[50%] mb-auto">
          <Image
            className="object-cover"
            src="/sell_mobile_phone.svg"
            alt="sell mobile phone"
            fill
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 sm:gap-12 mt-8 sm:mt-12">
        <p>Maximum Value</p>
        <p>Self & Hassle-Free</p>
        <p>Free Doorstep Pickup</p>
      </div>
    </div>
  );
};

export default ChooseBrand;
