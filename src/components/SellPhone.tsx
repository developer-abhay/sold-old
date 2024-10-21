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
  const [exactValueButtonClicked, setExactValueButtonClicked] = useState(false);
  const [selectVariant, setSelectVariant] = useState("");

  const [accessoriesButtonClicked, setAccessoriesButtonClicked] =
    useState(false);

  const [selectModels, setSelectModels] = useState("");

  // All brands
  const [brands, SetBrands] = useState([]);

  const getAllBrands = async () => {
    const data = await getBrands();
    SetBrands(data);
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <div className="py-8 border-b w-full">
      {!moreBrands && !selectBrand ? (
        <ChooseBrand
          brands={brands}
          setMoreBrands={setMoreBrands}
          setSelectBrand={setSelectBrand}
        />
      ) : (
        moreBrands &&
        !selectBrand && (
          <MoreBrands brands={brands} setSelectBrand={setSelectBrand} />
        )
      )}

      {selectBrand && !selectModels && (
        <ChooseModel
          setSelectModels={setSelectModels}
          selectBrand={selectBrand}
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
