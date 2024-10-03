import { BRANDS } from "@/constants/brands";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ChooseModel: React.FC<any> = ({
  selectBrand,
  selectSeries,
  setSelectSeries,
  setSelectModels,
}) => {
  const [showModels, setShowModels] = useState(false);
  return (
    <div className="w-full mx-auto max-w-7xl px-2 2xl:px-0">
      <h3 className="text-2xl font-semibold">Select Series</h3>

      <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-6 sm:gap-y-6 sm:gap-x-12 w-full">
        {BRANDS.find((brand) => brand.name === selectBrand)?.series?.map(
          (series, i) => (
            <Button
              key={i}
              className={cn(
                "border-2 bg-transparent hover:bg-transparent hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[12rem] transition-all shadow-md",
                {
                  "bg-amber-400 hover:bg-amber-400 shadow-none border-amber-400":
                    selectSeries.toLowerCase() === series.name.toLowerCase(),
                }
              )}
              onClick={() => {
                setShowModels(true);
                setSelectSeries(series.name);
              }}
            >
              {series.name}
            </Button>
          )
        )}
      </div>

      {showModels && (
        <>
          <h3 className="text-2xl font-semibold mt-5">Select Models</h3>

          <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-6 sm:gap-y-6 sm:gap-x-12 w-full">
            {BRANDS.find((brand) => brand.name === selectBrand)?.series?.map(
              (series, i) =>
                series.models.map((model, j) => (
                  <div
                    key={j}
                    className="cursor-pointer border-2 bg-transparent group text-gray-800 rounded-lg px-5 py-3 w-[12rem] transition-all shadow-md flex justify-center items-center"
                    onClick={() => {
                      // setSelectSeries(model.name);
                      setSelectModels(model.name);
                    }}
                  >
                    <img
                      className="group-hover:scale-[1.1] transition-all"
                      src={model.img}
                      alt={model.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ChooseModel;
