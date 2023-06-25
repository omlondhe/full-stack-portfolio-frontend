"use client";

import "@/styles/components/global/FloatingNavbar.css";
import { useCallback, useEffect, useState } from "react";
import ToggleButton from "../navbar/ToggleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Rubik_Vinyl } from "next/font/google";

const tiltPrimsFont = Rubik_Vinyl({ subsets: ["latin"], weight: "400" });

function FloatingNavbar() {
  const pathname = usePathname();
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
      className={`navbar fixed z-50 overflow-hidden bg-black dark:bg-white ${
        navbarIsOpen ? "navbar-open" : "navbar-close"
      } ${
        navbarIsOpen
          ? "border-none"
          : "border-t-4 border-l-4 border-white dark:border-t-4 dark:border-l-4 dark:border-black"
      }`}
    >
      <section
        className={`flex flex-col justify-around align-middle text-center absolute top-0 right-0 w-screen h-screen`}
      >
        <Link
          className={`${
            tiltPrimsFont.className
          } w-fit mx-auto link text-5xl text-white dark:text-black ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          onClick={() => setNavbarIsOpen(false)}
          href={`/`}
        >
          <p
            className={`${
              pathname === "/"
                ? "-rotate-[10deg] border-b-4 border-[#ffa500]"
                : ""
            }`}
          >
            Home
          </p>
        </Link>
        <Link
          className={`${
            tiltPrimsFont.className
          } w-fit mx-auto link text-5xl text-white dark:text-black ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          onClick={() => setNavbarIsOpen(false)}
          href={`/projects`}
        >
          <p
            className={`${
              pathname === "/projects"
                ? "-rotate-[10deg] border-b-4 border-[#ffa500]"
                : ""
            }`}
          >
            Projects
          </p>
        </Link>
        <Link
          className={`${
            tiltPrimsFont.className
          } w-fit mx-auto link text-5xl text-white dark:text-black ${
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
          } w-fit mx-auto link text-5xl text-white dark:text-black ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          onClick={() => setNavbarIsOpen(false)}
          href={`/achievements`}
        >
          <p
            className={`${
              pathname === "/achievements"
                ? "-rotate-[10deg] border-b-4 border-[#ffa500]"
                : ""
            }`}
          >
            Achievements
          </p>
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
