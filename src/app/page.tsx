import About from "@/components/home/About";
import Achievements from "@/components/home/Achievements";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import "@/styles/pages/home.css";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
    </main>
  );
}
