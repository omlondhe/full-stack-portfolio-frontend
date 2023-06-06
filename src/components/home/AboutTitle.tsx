"use client";

import { Monoton } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const monotonFont = Monoton({ subsets: ["latin"], weight: "400" });

function AboutTitle() {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = useCallback((_: Event) => {
    setScrollTop(scrollY);
  }, []);

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#ffa500] whitespace-nowrap">
      <p
        className={`${monotonFont.className} text-9xl text-white font-extrabold`}
        style={{ transform: `translateX(-${scrollTop * 5}px)` }}
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
