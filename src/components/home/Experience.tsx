import React from "react";
import ExperienceTitle from "./ExperienceTitle";
import { experienceData } from "@/data/home/experience/experience";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-slate-50 px-1">
      <ExperienceTitle />
      <div className="flex flex-col justify-center items-center w-full">
        {experienceData.map((data, index) => (
          <ExperienceCard
            key={index}
            description={data.description}
            endDate={data.endDate}
            location={data.location}
            logo={data.logo}
            name={data.name}
            role={data.role}
            skills={data.skills}
            startDate={data.startDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
