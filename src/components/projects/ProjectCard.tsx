import { ProjectCardType } from "@/types/components/projects/types";
import Link from "next/link";

function ProjectCard({
  title,
  description,
  githubLink,
  liveLink,
  techStack,
}: ProjectCardType) {
  return (
    <div className="flex w-screen min-h-screen">
      <div className="flex-[0.5] h-screen sticky top-0 overflow-hidden">
        <img src="https://unsplash.it/1000/1500" alt="" />
      </div>
      <div className="flex-[0.5] min-h-full bg-red-500 p-5 text-5xl">
        <p>{title}</p>
        <p>{description}</p>
        <Link href={githubLink}></Link>
        <Link href={githubLink}></Link>
      </div>
    </div>
  );
}

export default ProjectCard;
