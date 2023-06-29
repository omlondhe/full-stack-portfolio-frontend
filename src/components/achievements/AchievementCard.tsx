import "@/styles/components/achievements/AchievementCard.css";

import { AchievementCardType } from "@/types/data/achievements/types";
import Link from "next/link";

function AchievementCard({
  index,
  text,
  link,
  categories,
}: AchievementCardType) {
  return (
    <div
      {...{ index }}
      className={`achievementCard relative max-w-xl w-full p-4 pr-7 overflow-hidden border rounded-lg bg-white`}
    >
      <Link
        href={link}
        target="_blank"
        className={`${link ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <p className="text-lg">{`${text}`}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {categories.map((category) => (
            <p className="bg-[#FFA50055] px-3 rounded-full" key={category}>
              {category}
            </p>
          ))}
        </div>
        {link ? (
          <p className="backdrop-blur-sm px-1 rounded-lg text-[10px] text-gray-500 mt-5 leading-7 absolute w-fit top-4 -right-9 uppercase rotate-90">{`Click for more`}</p>
        ) : (
          <></>
        )}
      </Link>
    </div>
  );
}

export default AchievementCard;
