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
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

const SearchByName: React.FC<any> = ({ setSelectBrand, brands }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full mx-auto max-w-7xl px-2 2xl:px-0">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Input
              className="shadow-md h-[3rem] px-4"
              placeholder="Search Your Mobile To Sell"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Search Brand</DialogTitle>
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
                      ? brands.find((brand: any) => brand.brandName === value)
                          ?.brandName
                      : "Select brand name..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search model..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {brands.map((brand: any) => (
                          <CommandItem
                            key={brand.brandName}
                            value={brand.brandName}
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
                                value === brand.brandName
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {brand.brandName}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Button
                disabled={!value}
                onClick={() => setSelectBrand(value)}
                className="w-full mt-4 bg-amber-400 hover:bg-amber-300 text-black"
              >
                Apply
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchByName;
