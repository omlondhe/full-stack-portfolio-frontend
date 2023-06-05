import "@/styles/components/home/About.css";
import { Ubuntu } from "next/font/google";
import AboutTitle from "./AboutTitle";

const ubuntuFont = Ubuntu({ subsets: ["latin"], weight: "500" });

function About() {
  return (
    <div className="about bg-white">
      <AboutTitle />
      <div className="p-5">
        <p className="text-lg text-slate-600" style={{ lineHeight: 2 }}>
          Hello, my name is{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Om Prashant Londhe
          </span>
          . I am{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Self-taught Full Stack Developer
          </span>{" "}
          and{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            College-taught Computer Engineer
          </span>
          . I live in a beautiful city called{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Chhatrapati Sambhajinagar
          </span>{" "}
          (formerly known as Aurangabad) in Maharashtra State, India. I have
          been coding for almost last{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            {new Date().getFullYear() - 2019} years
          </span>{" "}
          and developing for almost last{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            {new Date().getFullYear() - 2020} years
          </span>{" "}
          and did not stop till today! I love to develop{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Web applications
          </span>{" "}
          and{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Hybrid mobile applications
          </span>
          . This is my personal portfolio website to showcase my{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>Projects</span>,{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Achievements
          </span>
          ,{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>Experience</span>{" "}
          and <span className={`${ubuntuFont.className} text-2xl`}>Blogs</span>.
          <br />I{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Develop applications
          </span>
          ,{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Contribute to Open Source
          </span>
          , and{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Give back to the community
          </span>
          . On top of that I also love to{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Spend time with my family
          </span>
          ,{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Go out on walk with my brother Luffy
          </span>
          ,{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>Play games</span>{" "}
          both on{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>Mobile</span> and{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Personal Computer
          </span>{" "}
          and{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            Watch movies in multiplex
          </span>{" "}
          etc! I am always ready to{" "}
          <span className={`${ubuntuFont.className} text-2xl`}>
            learn different skills
          </span>{" "}
          that I find relevant and emerging. Don't forget to go through the
          whole web application and dive into amazing world of tech from my shoe
          <span className={`${ubuntuFont.className} text-2xl`}>!!!</span>
        </p>
      </div>
    </div>
  );
}

export default About;
