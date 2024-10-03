import Image from "next/image";
import { Button } from "../ui/button";

const FinalPrice: React.FC<any> = () => {
  return (
    <div className="mx-auto max-w-7xl w-full px-2 2xl:px-0">
      <div className="w-full mx-auto max-w-7xl border-2 shadow-md rounded-lg py-3 px-3 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold">Apple iPhone 13</h4>
          <Image
            src={"/iphone13.svg"}
            alt="iphone 13"
            width={250}
            height={250}
          />
          <p className="text-center">
            You can sell your iPhone 13 at a best price rate of
          </p>

          <div className="mx-auto bg-black border-[0.8px] border-black rounded-full w-[40%] my-2" />

          <h5 className="text-2xl text-red-500 font-semibold">₹ 40,220</h5>

          <Button className="mt-4 mb-2 w-[25%] bg-green-500 text-white hover:bg-green-400 font-semibold text-lg disabled:bg-gray-400 mx-auto">
            Sell
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalPrice;
