import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { BRANDS, searcheableBrands } from "@/constants/brands";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const MoreBrands: React.FC<any> = ({ setSelectBrand }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="w-full mx-auto max-w-7xl px-2 2xl:px-0">
      <h3 className="text-2xl font-semibold">Select Brand</h3>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4  sm:justify-start sm:gap-y-8 sm:gap-x-12 w-full">
        {BRANDS.map((brand) => (
          <Image
            key={brand.name}
            className="cursor-pointer hover:scale-[1.1] transition-all"
            onClick={() => {
              // brand.series && setSelectBrand(brand.name);
              setSelectBrand("apple");
            }}
            src={brand.image}
            alt={brand.name}
            width={100}
            height={100}
          />
        ))}

        <Dialog>
          <DialogTrigger asChild>
            <button className="underline cursor-pointer">
              Or Search By Model
            </button>
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogTitle>Search model</DialogTitle>
              <DialogDescription>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild className="w-full mt-3">
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {value
                        ? searcheableBrands.find(
                            (brand) => brand.value === value
                          )?.label
                        : "Select model..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search model..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {searcheableBrands.map((brands) => (
                            <CommandItem
                              key={brands.value}
                              value={brands.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === brands.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {brands.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <Button
                  disabled={!value}
                  onClick={() => setSelectBrand("apple")}
                  className="w-full mt-4 bg-amber-400 hover:bg-amber-300 text-black"
                >
                  Apply
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default MoreBrands;
