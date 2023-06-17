import AchievementCard from "@/components/achievements/AchievementCard";
import { achievementsData } from "@/data/achievements/achievements";

import { Rubik } from "next/font/google";

const readexProFont = Rubik({ subsets: ["latin"] });

function Achievements() {
  return (
    <div className="relative flex flex-col items-center gap-10 p-5 pt-52 bg-slate-50">
      <h1
        className={`${readexProFont.className} rounded-lg z-10 w-full text-center py-5 mb-5 text-5xl font-bold bg-[#ffffffaa] sticky top-0 backdrop-blur-sm`}
      >
        Achievements
      </h1>
      {achievementsData.map((achievement, index) => (
        <AchievementCard
          index={(index + 1).toString()}
          text={achievement.text}
          link={achievement.link}
          categories={achievement.categories}
        />
      ))}
    </div>
  );
}

export default Achievements;
