import { ProjectsTechDataType } from "@/types/data/projects/types";
import { Ubuntu } from "next/font/google";
import Image from "next/image";

const ubuntuFont = Ubuntu({ subsets: ["latin"], weight: "500" });

function ProjectsTech({ image, title, content, type }: ProjectsTechDataType) {
  return (
    <div className="relative flex flex-col min-w-[200px] max-w-lg w-screen min-h-[500px] h-fit overflow-hidden backdrop-blur-lg border p-5 rounded-md m-2 object-cover mr-[75px] flex-shrink-0 shadow bg-[#ffffff55] border-white dark:bg-[#00000055] dark:border-[#333333]">
      <h2
        className={`${ubuntuFont.className} text-2xl mb-5 text-center border border-x-0 border-t-0 pb-5`}
      >
        {title}
      </h2>
      <p className="absolute top-[60px] left-[50%] translate-x-[-50%] rounded-full inline-block py-1 px-5 text-[#FFA500] text-sm bg-white dark:bg-black">
        {type}
      </p>
      <div className="h-[200px] w-full p-7">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
          className="drop-shadow-md w-[100%] h-[100%]"
        />
      </div>
      <div className="flex-1 pl-2">
        <p className="text-justify text-lg">{content}</p>
      </div>
    </div>
  );
}

export default ProjectsTech;
