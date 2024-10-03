import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ChooseVariant: React.FC<any> = ({
  selectVariant,
  setSelectVariant,
  setExactValueButtonClicked,
}: any) => {
  return (
    <div className="mx-auto max-w-7xl w-full px-2 2xl:px-0">
      <h3 className="text-2xl font-semibold my-4">Sell Your iPhone 13</h3>
      <div className="w-full mx-auto max-w-7xl border-2 shadow-md rounded-lg py-3">
        <div className="flex flex-col items-center justify-center px-3 sm:px-0">
          <h4 className="text-lg font-semibold">Apple iPhone 13</h4>
          <Image
            src={"/iphone13.svg"}
            alt="iphone 13"
            width={250}
            height={250}
          />
          <p>Choose a Variant</p>

          <div className="mx-auto bg-black border-[0.8px] border-black rounded-full w-full sm:w-[40%] my-2" />

          <div className="w-full sm:w-[40%] flex items-center gap-2">
            <Button
              className={cn(
                "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-full transition-all shadow-md",
                {
                  "bg-amber-400 border-amber-400 hover:bg-amber-400":
                    selectVariant === "128 GB",
                }
              )}
              onClick={() => {
                setSelectVariant("128 GB");
              }}
            >
              128 GB
            </Button>

            <Button
              className={cn(
                "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-full transition-all shadow-md",
                {
                  "bg-amber-400 border-amber-400 hover:bg-amber-400":
                    selectVariant === "256 GB",
                }
              )}
              onClick={() => {
                setSelectVariant("256 GB");
              }}
            >
              256 GB
            </Button>

            <Button
              className={cn(
                "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-full transition-all shadow-md",
                {
                  "bg-amber-400 border-amber-400 hover:bg-amber-400":
                    selectVariant === "512 GB",
                }
              )}
              onClick={() => {
                setSelectVariant("512 GB");
              }}
            >
              512 GB
            </Button>
          </div>

          <Button
            className="sm:w-[25%] bg-green-500 text-white hover:bg-green-400 mt-4 font-semibold text-lg disabled:bg-gray-400"
            disabled={!selectVariant}
            onClick={() => {
              setExactValueButtonClicked(true);
            }}
          >
            Get Exact Value
          </Button>

          <div className="mt-3 rounded-lg bg-amber-100 text-black/70 flex flex-col items-center gap-0.5 text-sm p-2">
            Note:-
            <p>
              The price stated above depends on the condition of the product and
              is not final. The final price offer will be quoted at the end of
              the diagnosis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseVariant;
