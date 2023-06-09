"use client";

import "@/styles/components/home/Projects.css";
import { useCallback, useEffect, useState } from "react";

function Projects({ monotonFont }: any) {
  let lastScrollY = 0;
  let ticking = false;
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = useCallback((_: Event) => {
    lastScrollY = scrollY;
    if (scrollY > 650 && scrollY < 2500) {
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
    <div className="bg-white overflow-hidden">
      <div className="h-[150px] whitespace-nowrap float-right">
        <p
          className={`${monotonFont.className} text-9xl text-[#FFA500]`}
          style={{ transform: `translateX(${scrollTop}px)` }}
        >
          PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
        </p>
      </div>
    </div>
  );
}

export default Projects;
