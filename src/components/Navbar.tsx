"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import AuthModal from "./auth/Login";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? (
        ""
      ) : (
        <header className="py-4 px-3 border-b border-gray-400">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 sm:gap-5">
            <Link href="/">
              <Image src="/soldold.svg" alt="logo" width={200} height={47} />
            </Link>

            <div className="w-full relative">
              <Input
                type="text"
                className="py-2 pl-2 sm:pr-10 w-full outline-none border-2 border-gray-400 rounded-lg hover:border-amber-400 transition-all focus-visible:border-black focus-visible:ring-0 focus-within:ring-0 focus:ring-0 ring-0"
                placeholder="Search For Mobile accessories & More"
              />
              <Search className="hidden sm:block absolute top-2 right-2" />
            </div>

            <AuthModal text={"Login"} />
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
