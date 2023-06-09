"use client";

import { projectsTechSectionData } from "@/data/home/projects/projectsTechSection";
import ProjectsTech from "./ProjectsTech";
import { createRef, useEffect, useState } from "react";
import "@/styles/components/home/ProjectsTechSection.css";
import Link from "next/link";

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
            background: "url('/projectTechsBackground.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
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

              <div
                className="relative grid place-items-center w-[350px] h-[350px] overflow-visible backdrop-blur-lg bg-[#ffffff55] border-2 border-white p-5 m-2 object-cover flex-shrink-0 shadow rounded-[100%] bg-[url('/blob-inner-image.jpeg')]"
                style={{
                  backgroundPosition: "center center",
                  backgroundRepeat: "none",
                  backgroundSize: "cover",
                }}
              >
                <Link
                  href={"/projects"}
                  className="projects__visit-button absolute text-lg font-semibold -bottom-4 mt-11 uppercase backdrop-blur-md bg-[#FFFFFFcc] border-gray-200 border rounded-full px-4 py-1 whitespace-nowrap"
                >
                  Visit Projects&nbsp;&nbsp;&nbsp;-&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsTechSection;
