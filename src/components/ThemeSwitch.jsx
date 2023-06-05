import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitch = ({ click }) => {
  return (
    <div className="themeButton" onClick={click}>
      {Number(localStorage.themeMode) ? (
        <>
          <MdLightMode />
        </>
      ) : (
        <>
          <MdDarkMode />
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
