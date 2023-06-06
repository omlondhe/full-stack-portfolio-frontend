import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import "@/styles/pages/home.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
