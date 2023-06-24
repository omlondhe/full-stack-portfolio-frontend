import "@/styles/components/projects/ProjectCard.css";
import { ProjectCardType } from "@/types/components/projects/types";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/Icons";
import { Fragment } from "react";

function ProjectCard({
  title,
  description,
  githubLink,
  liveLink,
  techStack,
  type,
  imageLink,
}: ProjectCardType) {
  return (
    <div className="flex w-screen min-h-screen snap-start relative">
      <div className="flex-[0.5] p-10 h-screen sticky top-0 overflow-hidden">
        <div
          className={`relative border border-gray-400 rounded-2xl overflow-hidden h-full w-full p-2 grid place-items-center`}
        >
          <img
            src={imageLink}
            alt={`${title} background`}
            className="absolute top-0 left-0 h-full w-full object-cover z-0 blur filter"
          />
          <div className="relative rounded-lg overflow-hidden object-contain z-10 drop-shadow">
            <img src={imageLink} alt={title} className="h-full w-full" />
          </div>
        </div>
      </div>
      <div className="flex-[0.5] min-h-full p-10 flex flex-col">
        <p className="text-lg pb-1 mb-3 border-b-2 w-fit">{type}</p>
        <h1 className="projectData__title text-5xl mb-5">{title}</h1>
        <ul className="projectData__description list-disc list-outside px-5 flex-1">
          {description
            .split(".")
            .map((sentence) =>
              sentence.length ? (
                <li className="text-justify">{`${sentence}.`}</li>
              ) : (
                <Fragment></Fragment>
              )
            )}
        </ul>
        <div className="flex gap-2 items-center my-5 flex-wrap">
          {techStack.map((tech) => (
            <p className="bg-[#ffa50055] border-[#ffa500aa] border-2 px-2 rounded-full">
              {tech}
            </p>
          ))}
        </div>
        <div className="flex justify-between gap-2 items-center my-5">
          {githubLink ? (
            <Link target="_blank" href={githubLink}>
              <GithubIcon />
            </Link>
          ) : (
            <Fragment></Fragment>
          )}
          {liveLink ? (
            <Link
              target="_blank"
              href={liveLink}
              className="bg-black px-3 py-1 text-white rounded-full"
            >
              Live Demo
            </Link>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
