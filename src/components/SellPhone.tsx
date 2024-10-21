/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import ChooseBrand from "./sellPhoneComponents/ChooseBrand";
import MoreBrands from "./sellPhoneComponents/MoreBrands";
import ChooseModel from "./sellPhoneComponents/ChooseModel";
import ChooseVariant from "./sellPhoneComponents/ChooseVariant";
import Deductions from "./sellPhoneComponents/Deductions";
import FinalPrice from "./sellPhoneComponents/FinalPrice";
import { getBrands } from "@/utils/fetchData";

const SellPhone: React.FC = () => {
  const [moreBrands, setMoreBrands] = useState(false);
  const [selectBrand, setSelectBrand] = useState("");
  const [selectModel, setSelectModel] = useState("");
  const [selectVariant, setSelectVariant] = useState("");
  const [selectPhone, setSelectPhone] = useState("");

  const [exactValueButtonClicked, setExactValueButtonClicked] = useState(false);

  const [accessoriesButtonClicked, setAccessoriesButtonClicked] =
    useState(false);

  // All brands
  const [allBrands, SetAllBrands] = useState([]);
  const [allVariants, setAllVariants] = useState("");

  const getAllBrands = async () => {
    const data = await getBrands();
    SetAllBrands(data);
  };

  // Final answers array
  const [deductionAnswers, setDeductionAnswers] = useState([] as number[]);

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <div className="py-8 border-b w-full">
      {!moreBrands && !selectBrand ? (
        <ChooseBrand
          brands={allBrands}
          setMoreBrands={setMoreBrands}
          setSelectBrand={setSelectBrand}
        />
      ) : (
        moreBrands &&
        !selectBrand && (
          <MoreBrands brands={allBrands} setSelectBrand={setSelectBrand} />
        )
      )}

      {selectBrand && !selectModel && (
        <ChooseModel
          selectBrand={selectBrand}
          setSelectModel={setSelectModel}
        />
      )}

      {selectModel && !exactValueButtonClicked && (
        <ChooseVariant
          selectModel={selectModel}
          selectVariant={selectVariant}
          setSelectVariant={setSelectVariant}
          setSelectPhone={setSelectPhone}
          allVariants={allVariants}
          setAllVariants={setAllVariants}
          setExactValueButtonClicked={setExactValueButtonClicked}
        />
      )}

      {exactValueButtonClicked && !accessoriesButtonClicked && (
        <Deductions
          selectModel={selectModel}
          selectVariant={selectVariant}
          selectPhone={selectPhone}
          accessoriesButtonClicked={accessoriesButtonClicked}
          setAccessoriesButtonClicked={setAccessoriesButtonClicked}
          deductionAnswers={deductionAnswers}
          setDeductionAnswers={setDeductionAnswers}
        />
      )}

      {accessoriesButtonClicked && (
        <FinalPrice
          selectPhone={selectPhone}
          deductionAnswers={deductionAnswers}
          selectVariant={selectVariant}
        />
      )}
    </div>
  );
};

export default SellPhone;
