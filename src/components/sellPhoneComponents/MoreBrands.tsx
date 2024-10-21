import Image from "next/image";
const MoreBrands: React.FC<any> = ({ brands, setSelectBrand }) => {
  return (
    <div className="w-full mx-auto max-w-7xl px-2 2xl:px-0">
      <h3 className="text-2xl font-semibold">Select Brand</h3>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4  sm:justify-start sm:gap-y-8 sm:gap-x-12 w-full">
        {brands.map((brand: any) => (
          <div
            key={brand.brandName}
            className="h-24 w-24 rounded-xl overflow-hidden"
          >
            <Image
              key={brand.brandName}
              className="cursor-pointer hover:scale-[1.1] transition-all"
              onClick={() => {
                setSelectBrand(brand.brandName);
              }}
              src={brand.brandLogo}
              alt={brand.brandName}
              width={96}
              height={96}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreBrands;
