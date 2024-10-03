import { DEVICE_INFO } from "@/constants/deductions";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Deductions: React.FC<any> = ({
  selectVariant,
  accessoriesButtonClicked,
  setAccessoriesButtonClicked,
}: any) => {
  const [normalConditionAnswers, setNormalConditionAnswers] = useState(
    [] as boolean[]
  );
  const [normalConditionButtonClicked, setNormalConditionButtonClicked] =
    useState(false);
  const [physicalConditionAnswers, setPhysicalConditionAnswers] = useState(
    [] as string[]
  );
  const [physicalConditionButtonClicked, setPhysicalConditionButtonClicked] =
    useState(false);
  const [functionalConditionAnswers, setFunctionalConditionAnswers] = useState(
    [] as string[]
  );
  const [
    functionalConditionButtonClicked,
    setFunctionalConditionButtonClicked,
  ] = useState(false);

  const [accessoriesAnswers, setAccessoriesAnswers] = useState([] as string[]);
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl w-full h-full md:h-[27rem] flex flex-col md:flex-row items-center gap-4 px-2 2xl:px-0",
        {
          "h-full md:h-[42rem]": physicalConditionButtonClicked,
          "h-full md:h-[23rem]": functionalConditionButtonClicked,
        }
      )}
    >
      <div className="h-full flex flex-col items-center justify-center w-full md:w-[35%] border-2 rounded-lg">
        <Image src="/iphone13.svg" alt="iphone 13" width={250} height={250} />
        <p className="text-xl font-semibold">Apple iPhone 13</p>
        <p className="text-sm">( 4 GB/{selectVariant})</p>
        <div className="my-2 mx-auto bg-black border-[0.8px] border-black rounded-full w-[80%]" />
        <p className="text-sm pb-3 md:pb-0">Device Evaluation</p>
      </div>

      {!normalConditionButtonClicked && (
        <div className="w-full md:w-[65%] h-full border-2 rounded-lg p-4">
          <h4 className="text-base text-center">
            Tell use More About Your Device
          </h4>
          <p className="text-center text-sm text-gray-500 mt-4">
            Please Answer A Few Questions About Your Devices
          </p>

          <div className="flex flex-col items-start gap-4 mt-4">
            {DEVICE_INFO.normalCondition.map((info, i) => (
              <div key={i} className="flex flex-col items-start gap-2">
                {i + 1}. {info}
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Button
                    className={cn(
                      "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[12rem] transition-all shadow-md",
                      {
                        "bg-amber-400 border-amber-400 hover:bg-amber-400":
                          normalConditionAnswers[i],
                      }
                    )}
                    onClick={() => {
                      setNormalConditionAnswers((prev) => {
                        const newAnswers = [...prev];
                        newAnswers[i] = true;
                        return newAnswers;
                      });
                    }}
                  >
                    Yes
                  </Button>

                  <Button
                    className={cn(
                      "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[12rem] transition-all shadow-md",
                      {
                        "bg-amber-400 border-amber-400 hover:bg-amber-400":
                          !normalConditionAnswers[i],
                      }
                    )}
                    onClick={() => {
                      setNormalConditionAnswers((prev) => {
                        const newAnswers = [...prev];
                        newAnswers[i] = false;
                        return newAnswers;
                      });
                    }}
                  >
                    No
                  </Button>
                </div>
              </div>
            ))}

            <Button
              className="mt-4 md:w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
              disabled={normalConditionAnswers.includes(undefined as never)}
              onClick={() => {
                setNormalConditionButtonClicked(true);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {normalConditionButtonClicked && !physicalConditionButtonClicked && (
        <div className="w-full md:w-[65%] h-full border-2 rounded-lg p-4">
          <h4 className="text-base text-center">
            Select Screen / Body That Are Applicable{" "}
          </h4>
          <p className="text-center text-sm text-gray-500 mt-4">
            Please Prove Correct Details
          </p>

          <div className="flex flex-col items-start gap-4 mt-8">
            {DEVICE_INFO.physicalCondition.map((info, i) => (
              <div key={i} className="flex flex-col items-start gap-2">
                <Button
                  className={cn(
                    "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                    {
                      "bg-amber-400 border-amber-400 hover:bg-amber-400":
                        physicalConditionAnswers[i],
                    }
                  )}
                  onClick={() => {
                    setPhysicalConditionAnswers((prev) => {
                      const newAnswers = [...prev];
                      if (newAnswers[i]) {
                        newAnswers[i] = "";
                      } else {
                        newAnswers[i] = info;
                      }
                      return newAnswers;
                    });
                  }}
                >
                  {info}
                </Button>
              </div>
            ))}
            <Button
              className="mt-[2rem] md:w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
              onClick={() => {
                setPhysicalConditionButtonClicked(true);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {physicalConditionButtonClicked && !functionalConditionButtonClicked && (
        <div className="w-full md:w-[65%] h-full border-2 rounded-lg p-4">
          <h4 className="text-base text-center">
            Functional Or Physical Problems
          </h4>
          <p className="text-center text-sm text-gray-500 mt-4">
            Please choose appropriate condition to get accurate quote
          </p>

          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="flex flex-col items-start gap-4 mt-8">
              {DEVICE_INFO.functionalCondition.slice(0, 9).map((info, i) => (
                <div key={i} className="flex flex-col items-start gap-2">
                  <Button
                    className={cn(
                      "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                      {
                        "bg-amber-400 border-amber-400 hover:bg-amber-400":
                          functionalConditionAnswers[i],
                      }
                    )}
                    onClick={() => {
                      setFunctionalConditionAnswers((prev) => {
                        const newAnswers = [...prev];
                        if (newAnswers[i]) {
                          newAnswers[i] = "";
                        } else {
                          newAnswers[i] = info;
                        }
                        return newAnswers;
                      });
                    }}
                  >
                    {info}
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 mt-8">
              {DEVICE_INFO.functionalCondition
                .slice(9, DEVICE_INFO.functionalCondition.length)
                .map((info, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <Button
                      className={cn(
                        "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                        {
                          "bg-amber-400 border-amber-400 hover:bg-amber-400":
                            functionalConditionAnswers[i + 9],
                        }
                      )}
                      onClick={() => {
                        setFunctionalConditionAnswers((prev) => {
                          const newAnswers = [...prev];
                          if (newAnswers[i + 9]) {
                            newAnswers[i + 9] = "";
                          } else {
                            newAnswers[i + 9] = info;
                          }
                          return newAnswers;
                        });
                      }}
                    >
                      {info}
                    </Button>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <Button
              className="mt-4 md:w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
              onClick={() => {
                setFunctionalConditionButtonClicked(true);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {functionalConditionButtonClicked && !accessoriesButtonClicked && (
        <div className="w-full md:w-[65%] h-full border-2 rounded-lg p-4">
          <h4 className="text-base text-center">Do you have the following?</h4>
          <p className="text-center text-sm text-gray-500 mt-4">
            Please select accessories which are available
          </p>

          <div className="flex flex-col items-start gap-4 mt-8">
            {DEVICE_INFO.accessories.map((info, i) => (
              <div key={i} className="flex flex-col items-start gap-2">
                <Button
                  className={cn(
                    "border-2 bg-transparent hover:bg-gray-200 hover:shadow-none text-gray-800 rounded-lg px-5 py-3 w-[20rem] transition-all shadow-md",
                    {
                      "bg-amber-400 border-amber-400 hover:bg-amber-400":
                        accessoriesAnswers[i],
                    }
                  )}
                  onClick={() => {
                    setAccessoriesAnswers((prev) => {
                      const newAnswers = [...prev];
                      if (newAnswers[i]) {
                        newAnswers[i] = "";
                      } else {
                        newAnswers[i] = info;
                      }
                      return newAnswers;
                    });
                  }}
                >
                  {info}
                </Button>
              </div>
            ))}

            <Button
              className="md:mt-[5.5rem] md:w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto"
              onClick={() => {
                setAccessoriesButtonClicked(true);
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deductions;
