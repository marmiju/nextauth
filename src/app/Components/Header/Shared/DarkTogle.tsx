"use client";
import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const DarkTogle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="text-2xl">
      <button
        onClick={() => {
          setIsDark(!isDark);
          document.documentElement.classList.toggle("dark");
        }}
        className=" border border-container shadow p-1 rounded-full hover:cursor-pointer "
      >
        {isDark ? <BiSun /> : <BiMoon />}
      </button>
    </div>
  );
};
