import React from "react";
import ExperienceTitle from "./ExperienceTitle";
import ExperienceCard from "./ExperienceCard";
import { URL } from "@/data/dataURL";
import { ExperienceType } from "@/types/data/experience/types";
// import { experienceData } from "@/data/home/experience/experience";

async function Experience() {
  const experienceDataResponse = await fetch(`${URL}/get-all-experiences`, {
    next: {
      revalidate: 10800,
    },
  });
  const experienceData: ExperienceType[] = await experienceDataResponse.json();

  return (
    <div
      id="experience"
      className="relative flex flex-col min-h-screen overflow-hidden px-1 bg-white dark:bg-black"
    >
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
