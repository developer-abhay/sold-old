import Image from "next/image";

const Works: React.FC = () => {
  return (
    <section className="bg-[#FFFCE3] pb-6 pt-5 mt-12">
      <div className="mx-auto max-w-7xl w-full">
        <h3 className="text-center text-2xl font-semibold">
          How It&apos;s Work
        </h3>
        <div className="mx-auto bg-black border-[0.8px] border-black rounded-full w-[30%] mt-2" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5">
          <div className="flex flex-col items-center">
            <div className="">
              <Image
                src="/check_price.svg"
                height={250}
                width={250}
                alt="check price"
              />
            </div>

            <h3 className="font-semibold text-xl">Check Price</h3>
            <p className="text-center max-w-[18rem]">
              Select your device & tell us about its current condition, and our
              advanced AI tech will tailor make the perfect price for you.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="">
              <Image
                src="/schedule_pickup.svg"
                height={250}
                width={250}
                alt="check price"
              />
            </div>

            <h3 className="font-semibold text-xl">Schedule Pickup</h3>
            <p className="text-center max-w-[18rem]">
              Book a free pickup from your home or work at a time slot that best
              suits your convenience.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="">
              <Image
                src="/get_paid.svg"
                height={250}
                width={250}
                alt="check price"
              />
            </div>

            <h3 className="font-semibold text-xl">Get Paid</h3>
            <p className="text-center max-w-[18rem]">
              Did we mention you get paid as soon as our executive picks up your
              device? It&apos;s instant payment all the way!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
