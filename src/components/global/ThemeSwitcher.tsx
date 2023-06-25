"use client";

import { IconButton } from "@mui/material";
import { DarkModeIcon, LightModeIcon } from "../icons/Icons";
import { useTheme } from "next-themes";
import { useEffect } from "react";

function ThemeSwitcher() {
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode) setTheme(mode);
    else setTheme(systemTheme || resolvedTheme || "light");
  }, []);

  return (
    <div className="fixed top-2 right-2 z-50 backdrop-blur-sm rounded-full">
      <IconButton
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        }}
        className="bg-[#ffffff22] dark:bg-[#00000022]"
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </div>
  );
}

export default ThemeSwitcher;
