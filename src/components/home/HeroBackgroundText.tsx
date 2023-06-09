"use client";

import "@/styles/components/home/HeroBackgroundText.css";
import { useCallback, useEffect, useState } from "react";

function HeroBackgroundText() {
  let lastScrollY = 0;
  let ticking = false;
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = useCallback((_: Event) => {
    if (scrollY <= 750) {
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
    <div className="hero__background-text-div overflow-hidden">
      <section className="hero__background-text-section">
        <div className="hero__background-text">
          <h2
            style={{
              textShadow: `${scrollTop}px 100px 0 rgba(0, 0, 0, 0.07)`,
              transform: `translateX(calc(0% + ${scrollTop}px * 0.5))`,
            }}
          >
            <span>Full Stack</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>Firebase</span>
            <span>MERN</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
          </h2>
          <h2
            style={{
              textShadow: `${scrollTop}px 100px 0 rgba(0, 0, 0, 0.07)`,
              transform: `translateX(calc(0% + ${scrollTop}px * 1.5))`,
            }}
          >
            <span>TypeScript</span>
            <span>Full Stack</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>Firebase</span>
            <span>MERN</span>
            <span>JavaScript</span>
          </h2>
          <h2
            style={{
              textShadow: `${scrollTop}px 100px 0 rgba(0, 0, 0, 0.07)`,
              transform: `translateX(calc(0% + ${scrollTop}px * 2.5))`,
            }}
          >
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Full Stack</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>Firebase</span>
            <span>MERN</span>
          </h2>
          <h2
            style={{
              textShadow: `${scrollTop}px 100px 0 rgba(0, 0, 0, 0.07)`,
              transform: `translateX(calc(0% + ${scrollTop}px * 3.5))`,
            }}
          >
            <span>MERN</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Full Stack</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>Firebase</span>
          </h2>
          <h2
            style={{
              textShadow: `${scrollTop}px 100px 0 rgba(0, 0, 0, 0.07)`,
              transform: `translateX(calc(0% + ${scrollTop}px * 4.5))`,
            }}
          >
            <span>Firebase</span>
            <span>MERN</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Full Stack</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
            <span>MongoDB</span>
            <span>ExpressJS</span>
          </h2>
          <h2
            style={{
              textShadow: `${scrollTop}px 100px 0 rgba(0, 0, 0, 0.07)`,
              transform: `translateX(calc(0% + ${scrollTop}px * 5.5))`,
            }}
          >
            <span>ExpressJS</span>
            <span>Firebase</span>
            <span>MERN</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Full Stack</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
            <span>MongoDB</span>
          </h2>
          <h2
            style={{
              textShadow: `${scrollTop}px 100px 0 rgba(0, 0, 0, 0.07)`,
              transform: `translateX(calc(0% + ${scrollTop}px * 6.5))`,
            }}
          >
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>Firebase</span>
            <span>MERN</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Full Stack</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>NodeJS</span>
          </h2>
        </div>
      </section>
    </div>
  );
}

export default HeroBackgroundText;
