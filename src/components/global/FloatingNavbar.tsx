"use client";

import "@/styles/components/global/FloatingNavbar.css";
import { useState } from "react";
import ToggleButton from "../navbar/ToggleButton";
import Link from "next/link";

function FloatingNavbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`navbar fixed z-50 bg-black overflow-hidden ${
        navbarIsOpen ? "navbar-open" : "navbar-close"
      }`}
    >
      <section
        className={`flex flex-col justify-around align-middle text-center absolute top-0 right-0 w-screen h-screen`}
      >
        <Link
          className={`link text-white text-2xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          href={`/`}
        >
          Home
        </Link>
        <Link
          className={`link text-white text-2xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          href={`/projects`}
        >
          Projects
        </Link>
        <Link
          className={`link text-white text-2xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          href={`/experience`}
        >
          Experience
        </Link>
        <Link
          className={`link text-white text-2xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          href={`/achievements`}
        >
          Achievements
        </Link>
        <Link
          className={`link text-white text-2xl ${
            navbarIsOpen ? "link-is-open" : "link-is-close"
          }`}
          href={`/contact`}
        >
          Contact
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