import React from "react";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="mt-20 h-20 border-t-2 border-black dark:border-primary-dark-text flex justify-center bg-primary-fourth dark:bg-black">
      <div className="flex flex-row gap-x-5 justify-center items-center">
        <p className="text-primary-second font-bold p-5  dark:text-primary-dark-text">
          Mehmet Hanifi Isık © 2021
        </p>
        <a
          className="text-2xl"
          href="https://github.com/mhanifiisik"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-primary-second" />
        </a>
        <a
          className="text-2xl"
          href="https://www.linkedin.com/in/mehmet-hanifi-isik"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-primary-second" />
        </a>
        <a
          className="text-2xl"
          href="https://www.kaggle.com/mehmethanifiik"
          target="_blank"
          rel="noreferrer"
        >
          <FaKaggle className="text-primary-second" />
        </a>
        <a className="text-2xl" href="mailto:mhanifi.portfolio@gmail.com">
          <SiGmail className="text-primary-second" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
