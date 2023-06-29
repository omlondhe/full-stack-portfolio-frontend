// import { achievementsData } from "@/data/achievements/achievements";
import AchievementCard from "@/components/achievements/AchievementCard";
import { URL } from "@/data/dataURL";
import { AchievementDataType } from "@/types/data/achievements/types";

import { Rubik } from "next/font/google";

const readexProFont = Rubik({ subsets: ["latin"] });

async function Achievements() {
  const achievementsResponse = await fetch(`${URL}/get-all-achievements`, {
    next: { revalidate: 10800 },
  });
  const achievementsData: AchievementDataType[] =
    await achievementsResponse.json();

  return (
    <div className="relative flex flex-col items-center gap-10 p-5 pt-52 bg-slate-50 dark:bg-black">
      <h1
        className={`${readexProFont.className} rounded-lg z-10 w-full text-center py-5 mb-5 text-5xl font-bold bg-[#ffffffaa] dark:bg-[#000000aa] sticky top-0 backdrop-blur-sm`}
      >
        Achievements
      </h1>
      {achievementsData.map((achievement, index) => (
        <AchievementCard
          key={achievement.text}
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
