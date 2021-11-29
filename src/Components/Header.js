import React, { useState } from "react";
import { BsCodeSquare } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";
import Toogle from "../Components/Toogle";
function Header() {
  const [show, setShow] = useState(false);
  const togglemenu = () => {
    setShow(!show);
  };
  return (
    <section className="border-b-2 border-black dark:border-primary-dark-text">
      <nav className="flex flex-row justify-between px-5 h-20 items-center  text-2xl">
        <BsCodeSquare className="text-4xl dark:text-primary-dark-text" />
        <div className="flex flex-row gap-x-5 justify-center items-center ">
          <Toogle />
          <GiHamburgerMenu
            onClick={togglemenu}
            className="cursor-pointer w-9 h-9 dark:text-primary-dark-text"
          />
        </div>
        {show && (
          <div className="flex flex-col gap-y-5 text-center justify-center items-center text-3xl md:text-4xl  p-5 fixed   bg-red-500 dark:bg-white dark:text-black z-50 left-0 top-0 w-full h-screen">
            <a
              className="cursor-pointer font-bold hover:bg-white p-5 transitionduration-1000 ease"
              href="#Home"
              onClick={togglemenu}
            >
              Home
            </a>
            <a
              className="cursor-pointer font-bold hover:bg-white p-5 transition duration-1000 ease"
              href="#About"
              onClick={togglemenu}
            >
              About
            </a>
            <a
              className="cursor-pointer font-bold hover:bg-white p-5 transition duration-1000 ease"
              href="#Projects"
              onClick={togglemenu}
            >
              Projects
            </a>
            <a
              className="cursor-pointer font-bold hover:bg-white p-5 transition duration-1000 ease"
              href="#Contact"
              onClick={togglemenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </section>
  );
}

export default Header;
