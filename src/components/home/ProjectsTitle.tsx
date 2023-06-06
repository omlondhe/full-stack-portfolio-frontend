"use client";

import "@/styles/components/home/Projects.css";
import { useCallback, useEffect, useState } from "react";

function Projects({ monotonFont }: any) {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = useCallback((_: Event) => {
    setScrollTop(scrollY);
  }, []);

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <div className="h-[150px] whitespace-nowrap float-right">
        <p
          className={`${monotonFont.className} text-9xl text-[#FFA500]`}
          style={{ transform: `translateX(${scrollTop * 5}px)` }}
        >
          PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
        </p>
      </div>
    </div>
  );
}

export default Projects;
