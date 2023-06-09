import "@/styles/components/achievements/Achievements.css";
import Link from "next/link";

function Achievements() {
  return (
    <div className="grid place-items-center mt-11">
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
          className="achievements__visit-button absolute text-lg font-semibold -bottom-4 mt-11 uppercase backdrop-blur-md bg-[#FFFFFFcc] border-gray-200 border rounded-full px-4 py-1 whitespace-nowrap"
        >
          Visit Achievements&nbsp;&nbsp;&nbsp;-&gt;
        </Link>
      </div>
    </div>
  );
}

export default Achievements;
