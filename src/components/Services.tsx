import Image from "next/image";

const Services: React.FC = () => {
  return (
    <div className="mt-10 mx-auto max-w-7xl w-full px-3 2xl:px-0">
      <h3 className="font-semibold uppercase text-lg my-3">Our Services</h3>

      <div className="flex flex-wrap items-center justify-center sm:flex-nowrap sm:items-start sm:justify-normal gap-6">
        <div className="group cursor-pointer flex flex-col justify-items-center gap-2 text-center w-fit">
          <Image
            className="group-hover:scale-110 transition-all"
            src="/services_sell_phone.svg"
            alt="Sell Phone"
            width={150}
            height={120}
          />
          Sell Phone
        </div>

        <div className="group cursor-pointer flex flex-col justify-items-center gap-2 text-center w-fit">
          <Image
            className="group-hover:scale-110 transition-all"
            src="/selltablet.svg"
            alt="Sell Tablet"
            width={150}
            height={120}
          />
          Sell Tablet
        </div>

        <div className="group cursor-pointer flex flex-col justify-items-center gap-2 text-center w-fit">
          <Image
            className="group-hover:scale-110 transition-all"
            src="/sell_laptop.svg"
            alt="Sell Laptop"
            width={150}
            height={120}
          />
          Sell Laptop
        </div>

        <div className="group cursor-pointer flex flex-col justify-items-center gap-2 text-center w-fit">
          <Image
            className="group-hover:scale-110 transition-all"
            src="/sell_smartwatch.svg"
            alt="Sell Smartwatch"
            width={150}
            height={120}
          />
          Sell Smartwatch
        </div>

        <div className="group cursor-pointer flex flex-col justify-items-center gap-2 text-center w-fit relative">
          <Image
            src="/more.svg"
            alt="More"
            width={150}
            height={120}
            className="group-hover:scale-110 transition-all"
          />
          <p className="absolute top-[30%] left-[30%] font-semibold text-black text-xl">
            MORE
          </p>
          More
        </div>
      </div>
    </div>
  );
};

export default Services;
