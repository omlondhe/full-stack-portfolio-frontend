"use client";

import { projectsTechSectionData } from "@/data/home/projects/projectsTechSection";
import ProjectsTech from "./ProjectsTech";
import { LegacyRef, createRef, useEffect, useRef, useState } from "react";

function ProjectsTechSection() {
  const objectRef = createRef<HTMLDivElement>();
  const containerRef = createRef<HTMLDivElement>();

  const [translateX, setTranslateX] = useState<number>(0);
  const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);

  const calcDynamicHeight = (objectWidth: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };

  const handleDynamicHeight = (ref: any, setDynamicHeight: Function) => {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  };

  const applyScrollListener = (ref: any, setTranslateX: Function) => {
    window.addEventListener("scroll", () => {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    });
  };

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div className="h-screen p-5 ">
      <div
        className="sticky top-0 h-screen w-screen overflow-x-hidden"
        ref={containerRef}
      >
        <div
          className="absolute h-screen will-change-transform"
          ref={objectRef}
        >
          {projectsTechSectionData.map((data) => (
            <ProjectsTech
              key={data.title}
              image={data.image}
              title={data.title}
              content={data.content}
              type={data.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsTechSection;
