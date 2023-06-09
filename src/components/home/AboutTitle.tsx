"use client";

import { Monoton } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const monotonFont = Monoton({ subsets: ["latin"], weight: "400" });

function AboutTitle() {
  let lastScrollY = 0;
  let ticking = false;
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = useCallback((_: Event) => {
    if (scrollY <= 850) {
      lastScrollY = scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollTop(lastScrollY);
          ticking = false;
        });
        ticking = true;
      }
    }
  }, []);

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#ffa500] whitespace-nowrap overflow-hidden">
      <p
        className={`${monotonFont.className} text-9xl font-extrabold text-white dark:text-black`}
        style={{ transform: `translateX(-${scrollTop}px)` }}
      >
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Who Am I? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Who Am I?
      </p>
    </div>
  );
}

export default AboutTitle;
