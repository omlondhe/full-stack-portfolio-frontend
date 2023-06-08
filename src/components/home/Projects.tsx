import "@/styles/components/home/Projects.css";
import { Monoton } from "next/font/google";
import ProjectsTitle from "./ProjectsTitle";
import ProjectsData from "./ProjectsData";
import ProjectsTechSection from "./ProjectsTechSection";

const monotonFont = Monoton({ subsets: ["latin"], weight: "400" });

function Projects() {
  return (
    <div className="bg-white relative">
      <ProjectsTitle monotonFont={monotonFont} />
      <ProjectsData />
      <ProjectsTechSection />
    </div>
  );
}

export default Projects;
