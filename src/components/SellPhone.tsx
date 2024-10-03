/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import ChooseBrand from "./sellPhoneComponents/ChooseBrand";
import MoreBrands from "./sellPhoneComponents/MoreBrands";
import ChooseModel from "./sellPhoneComponents/ChooseModel";
import ChooseVariant from "./sellPhoneComponents/ChooseVariant";
import Deductions from "./sellPhoneComponents/Deductions";
import FinalPrice from "./sellPhoneComponents/FinalPrice";

const SellPhone: React.FC = () => {
  const [moreBrands, setMoreBrands] = useState(false);
  const [selectBrand, setSelectBrand] = useState("");
  const [selectSeries, setSelectSeries] = useState("");
  const [exactValueButtonClicked, setExactValueButtonClicked] = useState(false);
  const [selectVariant, setSelectVariant] = useState("");

  const [accessoriesButtonClicked, setAccessoriesButtonClicked] =
    useState(false);

  const [selectModels, setSelectModels] = useState("");

  return (
    <div className="py-8 border-b w-full">
      {!moreBrands && !selectBrand && !selectSeries ? (
        <ChooseBrand setSelectBrand={setSelectBrand} />
      ) : (
        moreBrands &&
        !selectBrand && (
          <MoreBrands
            setMoreBrands={setMoreBrands}
            setSelectBrand={setSelectBrand}
          />
        )
      )}

      {selectBrand && !selectModels && (
        <ChooseModel
          setSelectModels={setSelectModels}
          selectBrand={selectBrand}
          selectSeries={selectSeries}
          setSelectSeries={setSelectSeries}
        />
      )}

      {selectModels && !exactValueButtonClicked && (
        <ChooseVariant
          selectVariant={selectVariant}
          setSelectVariant={setSelectVariant}
          setExactValueButtonClicked={setExactValueButtonClicked}
        />
      )}

      {exactValueButtonClicked && !accessoriesButtonClicked && (
        <Deductions
          selectVariant={selectVariant}
          accessoriesButtonClicked={accessoriesButtonClicked}
          setAccessoriesButtonClicked={setAccessoriesButtonClicked}
        />
      )}

      {accessoriesButtonClicked && <FinalPrice />}
    </div>
  );
};

export default SellPhone;
