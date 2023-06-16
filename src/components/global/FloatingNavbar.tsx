"use client";

import "@/styles/components/global/FloatingNavbar.css";
import { useCallback, useEffect, useState } from "react";
import ToggleButton from "../navbar/ToggleButton";
import Link from "next/link";

import { Rubik_Vinyl } from "next/font/google";

const tiltPrimsFont = Rubik_Vinyl({ subsets: ["latin"], weight: "400" });

function FloatingNavbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);

  const handleKeyPress = useCallback((ev: globalThis.KeyboardEvent) => {
    if (ev.key === "Escape") setNavbarIsOpen(false);
    if (ev.code === "KeyM") setNavbarIsOpen(true);
  }, []);

  useEffect(() => {
    addEventListener("keydown", handleKeyPress, false);
    return () => {
      removeEventListener("keydown", handleKeyPress, false);
    };
  }, [handleKeyPress]);

  return (
    <nav
      className={`navbar fixed z-50 bg-black overflow-hidden ${
        navbarIsOpen ? "navbar-open" : "navbar-close"
      } ${navbarIsOpen ? "border-none" : "border-t-4 border-l-4"}`}
    >
      <section
        className={`flex flex-col justify-around align-middle text-center absolute top-0 right-0 w-screen h-screen`}
      >
        <Link
          className={`${
            tiltPrimsFont.className
          } w-fit mx-auto link text-white text-5xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          href={`/`}
        >
          <p>Home</p>
        </Link>
        <Link
          className={`${
            tiltPrimsFont.className
          } w-fit mx-auto link text-white text-5xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          href={`/projects`}
        >
          <p>Projects</p>
        </Link>
        <Link
          className={`${
            tiltPrimsFont.className
          } w-fit mx-auto link text-white text-5xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          onClick={() => setNavbarIsOpen(false)}
          href={`/#experience`}
        >
          <p>Experience</p>
        </Link>
        <Link
          className={`${
            tiltPrimsFont.className
          } w-fit mx-auto link text-white text-5xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          onClick={() => setNavbarIsOpen(false)}
          href={`/achievements`}
        >
          <p>Achievements</p>
        </Link>
      </section>
      <ToggleButton
        navbarIsOpen={navbarIsOpen}
        setNavbarIsOpen={setNavbarIsOpen}
      />
    </nav>
  );
}

export default FloatingNavbar;
