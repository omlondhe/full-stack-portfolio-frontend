import "@/styles/components/home/Hero.css";
import heroWave from "../../../public/hero-wave.svg";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero relative">
      <div className="hero__title text-center mt-10">
        <p className="text-5xl font-bold mb-7">Om Prashant Londhe</p>
        <p className="text-4xl font-semibold">Full Stack Developer</p>
      </div>
      <div className="hero__blob-image h-96 w-96 mx-auto">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="object-cover overflow-hidden"
        >
          <clipPath id="clip-path">
            <path
              d="M38.2,-51.2C48.8,-44.9,56.1,-32.8,64.7,-18.2C73.4,-3.6,83.5,13.4,82.5,30C81.5,46.6,69.5,62.8,53.9,72.4C38.3,82,19.1,84.9,2.5,81.5C-14.2,78.1,-28.3,68.3,-36.7,56.4C-45.1,44.4,-47.7,30.4,-51.9,17C-56.1,3.6,-62,-9.2,-61.2,-22.4C-60.4,-35.6,-52.9,-49.1,-41.6,-55.2C-30.3,-61.2,-15.2,-59.8,-0.7,-58.8C13.8,-57.9,27.7,-57.5,38.2,-51.2Z"
              transform="translate(100 100)"
            />
          </clipPath>
          <image
            clip-path="url(#clip-path)"
            xlinkHref={`/blob-inner-image.jpeg`}
            height="200"
            width="200"
          ></image>
        </svg>
      </div>
      <div className="hero__bottom-wave w-screen object-cover absolute left-0 h-[200px] overflow-hidden">
        <Image
          src={heroWave}
          alt="Hero section base image"
          className="h-full min-w-max"
        />
      </div>
    </div>
  );
}

export default Hero;
