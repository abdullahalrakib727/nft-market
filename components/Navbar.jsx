import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import images from "../assets";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b darK:bg-nft-dark bg-white dark:border- nft-black-1 border-nft-gray-1 ">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer">
            <Image
              src={images.logo02}
              objectFit="contain"
              alt="logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              Cryptoket
            </p>
          </div>
        </Link>
        <Link href="/">
          <div
            className="hidden md:flex"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Image
              src={images.logo02}
              objectFit="contain"
              alt="logo"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 bg-white absolute rounded-full ball" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
