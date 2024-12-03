"use client";

import SearchBar from "@/components/ui-kit/search-bar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="grid grid-cols-4 py-4">
      <div className="flex items-center gap-x-2">
        <Image src="assets/images/logo.svg" alt="Logo" width={40} height={40} />
        <h1 className="col-span-1 flex flex-col">
          <span className="font-black text-celtic-blue">SHOPTRON</span>
          <span className="text-xs text-payne-gray">Admin Panel</span>
        </h1>
      </div>
      <div className="col-span-3 flex items-center justify-between">
        <SearchBar className="w-1/2" />
        <div className="rounded-full h-10 w-10 relative overflow-hidden">
          <Image
            src="/assets/images/user.jpg"
            alt="User"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
