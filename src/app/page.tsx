import About from "@/components/home/About";
import Achievements from "@/components/home/Achievements";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import "@/styles/pages/home.css";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="relative bg-white dark:bg-black">
      <Hero />
      <About />
      <Projects />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <Experience />
      </Suspense>
      <Achievements />
    </main>
  );
}
