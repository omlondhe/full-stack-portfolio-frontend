import { ExperienceType } from "@/types/data/experience/types";
import { Ubuntu } from "next/font/google";
import Image from "next/image";

const ubuntuFont = Ubuntu({ subsets: ["latin"], weight: "500" });

function ExperienceCard({
  description,
  endDate,
  location,
  logo,
  name,
  role,
  skills,
  startDate,
}: ExperienceType) {
  return (
    <div
      className={`flex flex-col items-center max-w-[550px] min-w-[270px] w-full p-5 mb-4 border rounded-md bg-white dark:bg-[#141414] ${
        endDate === "Present" ? "border-[#FFA500]" : "border-gray-500"
      }`}
    >
      <Image
        src={logo}
        height={150}
        width={150}
        alt={name}
        className="border rounded-md"
      />
      <p
        className={`${ubuntuFont.className} mt-5 text-2xl font-bold underline`}
      >
        {role}
      </p>
      <p className={`${ubuntuFont.className} text-xl font-semibold`}>{name}</p>
      <p className="text-sm text-gray-400">{location}</p>
      <div className="flex w-full items-center mt-4">
        <p className="inline-block">{startDate}</p>
        <div className="flex-1 h-1 rounded-full border border-dashed mx-2"></div>
        <p className="inline-block">{endDate}</p>
      </div>
      <div className="mt-5 w-full px-5">
        <ul>
          {description.map((line) => (
            <li className="list-item" style={{ listStyleType: "circle" }}>
              {line}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 w-full flex items-center justify-center flex-wrap">
        {skills.map((skill) => (
          <p className="bg-[#FFA50055] m-2 px-3 rounded-full">{skill}</p>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
