import ProjectCard from "@/components/projects/ProjectCard";
import { URL } from "@/data/dataURL";
import { ProjectCardType } from "@/types/components/projects/types";
// import { projectsData } from "@/data/projects/projects";

async function Projects() {
  const projectsDataResponse = await fetch(`${URL}/get-all-projects`, {
    next: {
      revalidate: 10800,
    },
  });
  const projectsData: ProjectCardType[] = await projectsDataResponse.json();

  return (
    <div
      className="relative flex flex-col w-screen h-screen overflow-scroll"
      style={{
        scrollSnapType: "y mandatory",
      }}
    >
      {projectsData.map((projectData) => (
        <ProjectCard
          key={projectData.rank}
          rank={projectData.rank}
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
