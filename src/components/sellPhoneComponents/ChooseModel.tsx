import { useEffect, useState } from "react";
import { getModels } from "@/utils/fetchData";

const ChooseModel: React.FC<any> = ({ selectBrand, setSelectModel }) => {
  const [models, setModels] = useState([]);

  const fetchAllModels = async () => {
    const data = await getModels(selectBrand);
    setModels(data);
  };

  useEffect(() => {
    fetchAllModels();
  }, []);

  return (
    <div className="w-full mx-auto max-w-7xl px-2 2xl:px-0">
      <>
        <h3 className="text-2xl font-semibold mt-5">Select Models</h3>

        <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-6 sm:gap-y-6 sm:gap-x-12 w-full">
          {models.map((model: any) => {
            return (
              <div
                key={model._id}
                className="flex flex-col justify-center items-center w-32 cursor-pointer border-2 bg-transparent group text-gray-800 rounded-lg bg-black overflow-hidden px-5 py-3 transition-all shadow-md "
                onClick={() => {
                  setSelectModel(model);
                }}
              >
                <div>
                  <img
                    className="group-hover:scale-[1.1] transition-all object-contain h-32"
                    src={model.thumbnail}
                    alt={model.name}
                  />
                </div>
                <p className="text-sm text-center mt-3">{model.name}</p>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default ChooseModel;
