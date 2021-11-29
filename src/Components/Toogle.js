import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Darkmode from "../Components/Darkmode";

export default function Toogle() {
  const [colorTheme, setTheme] = Darkmode();
  return (
    <div className="flex flex-col">
      <span onClick={() => setTheme(colorTheme)}>
        {colorTheme === "light" ? (
          <FiSun className="w-9 h-9 dark:text-primary-dark-text" />
        ) : (
          <FiMoon className="w-9 h-9" />
        )}
      </span>
    </div>
  );
}
