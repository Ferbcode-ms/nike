import { headerLogo } from "../assets/images";
import { hamburger, cross } from "../assets/icons";
import { navLinks } from "../constants";
import React, { useState } from "react";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className="padding-x absolute z-20 w-full py-8 max-sm:fixed max-sm:bg-white">
      <nav className="max-container flex items-center justify-center">
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
        </a>

        <ul
          className={
            "flex flex-1 items-center justify-center gap-16 max-lg:hidden"
          }
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto hidden cursor-pointer max-lg:block">
          <img
            src={click ? cross : hamburger}
            alt="hamburger"
            height={25}
            width={25}
            onClick={handleClick}
          />
        </div>

        <ul
          className={`absolute top-16 z-30 m-7 flex h-[20rem] w-[90%] origin-top-right flex-col items-center justify-center rounded-2xl bg-gray-300 p-6 font-semibold drop-shadow-md transition-all duration-500 ${click ? "scale-100 opacity-100" : "scale-75 opacity-0"} lg:hidden`}
        >
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="group m-2 rounded-lg px-6 py-2 transition hover:bg-gray-100"
            >
              <a
                href={item.href}
                onClick={closeMobileMenu}
                className="text-bold font-montserrat text-lg leading-normal text-slate-gray group-hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
