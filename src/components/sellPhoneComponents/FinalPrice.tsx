import { calculateBestPrice } from "@/utils/fetchUserData";
import AuthModal from "../auth/Login";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";
import { schedulePickup } from "@/utils/user.auth";

const FinalPrice: React.FC<any> = ({
  selectPhone,
  deductionAnswers,
  selectVariant,
}) => {
  const [bestPrice, setBestPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // Context
  const { isAuthenticated, role } = useAuth();

  const getBestPrice = async () => {
    console.log(selectPhone);
    console.log(selectVariant);
    const data = await calculateBestPrice(
      selectPhone._id,
      deductionAnswers,
      selectVariant._id
    );
    setBestPrice(data);
  };

  const sellPhone = async () => {
    if (isAuthenticated && role == "user") {
      setLoading(true);
      const data = await schedulePickup(selectPhone._id, selectVariant._id);
      console.log(data);
      alert(data);
      setLoading(false);
    } else {
      alert("Please Login first");
    }
  };

  useEffect(() => {
    getBestPrice();
  }, []);

  return (
    <div className="mx-auto max-w-7xl w-full px-2 2xl:px-0">
      <div className="w-full mx-auto max-w-7xl border-2 shadow-md rounded-lg py-3 px-3 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold">{selectPhone.name}</h4>
          <div className="h-64 p-4">
            <img
              className="h-full object-contain"
              src={selectPhone.thumbnail}
              alt={selectPhone.model}
            />
          </div>
          <p className="text-center">
            You can sell your {selectPhone.model} at a best price rate of
          </p>

          <div className="mx-auto bg-black border-[0.8px] border-black rounded-full w-[40%] my-2" />

          <h5 className="text-2xl text-red-500 font-semibold mb-2">
            ₹ {bestPrice}
          </h5>

          {/* <AuthModal text={"Sell"} /> */}
          <Button
            className="bg-amber-300 text-black hover:bg-amber-400 w-16 sm:w-32 rounded-lg text-base"
            onClick={sellPhone}
          >
            Sell
          </Button>
          {/* {error && <p className="text-md text-red-700">{error}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default FinalPrice;
