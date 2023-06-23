import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects/projects";

function Projects() {
  return (
    <div
      className="relative flex flex-col w-screen h-screen overflow-scroll"
      style={{
        scrollSnapType: "y mandatory",
      }}
    >
      {projectsData.map((projectData) => (
        <ProjectCard
          title={projectData.title}
          description={projectData.description}
          liveLink={projectData.liveLink}
          githubLink={projectData.githubLink}
          techStack={projectData.techStack}
          type={projectData.type}
          imageLink={projectData.imageLink}
        />
      ))}
    </div>
  );
}

export default Projects;
