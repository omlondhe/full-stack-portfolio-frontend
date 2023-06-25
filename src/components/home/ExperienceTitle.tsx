import { Monoton } from "next/font/google";

const monotonFont = Monoton({ subsets: ["latin"], weight: "400" });

function ExperienceTitle() {
  return (
    <div
      className={`bg-[#ffa500] whitespace-nowrap overflow-hidden align-center h-fit w-fit mx-auto`}
    >
      <p
        className={`${monotonFont.className} text-9xl w-full text-white dark:text-black`}
        style={{
          textOrientation: "upright",
          writingMode: "vertical-lr",
        }}
      >
        Experience
      </p>
    </div>
  );
}

export default ExperienceTitle;
