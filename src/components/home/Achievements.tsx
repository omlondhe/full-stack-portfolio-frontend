import "@/styles/components/achievements/Achievements.css";
import Link from "next/link";

function Achievements() {
  return (
    <div
      className="grid place-items-center py-20"
      style={{
        background: "linear-gradient(rgb(248, 250, 252), white, white)",
      }}
    >
      <div
        className="relative grid place-items-center w-[350px] h-[350px] overflow-visible backdrop-blur-lg bg-[#ffffff55] border-2 border-white p-5 m-2 object-cover flex-shrink-0 shadow rounded-[100%] bg-[url('/blob-inner-image.jpeg')]"
        style={{
          backgroundPosition: "center center",
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <Link
          href={"/achievements"}
          className="achievements__visit-button absolute text-lg font-semibold -bottom-4 mt-11 uppercase backdrop-blur-md bg-[#FFFFFF] border-gray border-2 rounded-full px-4 py-1 whitespace-nowrap"
        >
          Visit Achievements&nbsp;&nbsp;&nbsp; -&gt;
        </Link>
      </div>
    </div>
  );
}

export default Achievements;
