"use client";

import { projectsTechSectionData } from "@/data/home/projects/projectsTechSection";
import ProjectsTech from "./ProjectsTech";
import { createRef, useEffect, useState } from "react";

const calcDynamicHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

function ProjectsTechSection() {
  const objectRef = createRef<HTMLDivElement>();
  const containerRef = createRef<HTMLDivElement>();

  const [translateX, setTranslateX] = useState<number>(0);
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);

  useEffect(() => {
    if (objectRef) {
      const handler = () => {
        const objectWidth = objectRef.current
          ? objectRef.current.scrollWidth
          : 0;
        const dynamicHeight = calcDynamicHeight(objectWidth);
        setDynamicHeight(dynamicHeight);
      };
      handler();
      window.addEventListener("resize", handler);
    }
  }, [objectRef]);

  useEffect(() => {
    if (containerRef)
      window.addEventListener("scroll", () => {
        const offsetTop = containerRef.current
          ? -containerRef.current.offsetTop
          : 0;
        setTranslateX(offsetTop);
      });
  }, [containerRef]);

  return (
    <section className="relative min-h-screen w-full">
      <div className="relative w-full" style={{ height: dynamicHeight }}>
        <div
          ref={containerRef}
          className="top-0 h-screen w-full overflow-x-hidden"
          style={{
            position: "sticky",
            top: 0,
            background: "radial-gradient(#FFA50077, transparent, transparent)",
          }}
        >
          <div
            ref={objectRef}
            className="absolute h-full will-change-transform translate-x-1/2"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            <div
              className="relative h-full pl-96 flex"
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "row nowrap",
              }}
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
      </div>
    </section>
  );
}

export default ProjectsTechSection;
