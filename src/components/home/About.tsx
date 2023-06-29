import "@/styles/components/home/About.css";
import { Ubuntu } from "next/font/google";
import AboutTitle from "./AboutTitle";
import Image from "next/image";

const ubuntuFont = Ubuntu({ subsets: ["latin"], weight: "500" });

function About() {
  return (
    <div className="bg-white dark:bg-black">
      <AboutTitle />
      <div className="p-5 max-w-5xl text-justify mx-auto">
        <p className="text-lg leading-loose text-slate-600 dark:text-slate-400">
          Hello, my name is{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Om
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Prashant
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Londhe
          </span>
          . I am{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Self-taught
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Full
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Stack
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Developer
          </span>{" "}
          and{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            College-taught
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Computer
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Engineer
          </span>
          . I live in a beautiful city called{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Chhatrapati
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Sambhajinagar
          </span>{" "}
          (formerly known as Aurangabad) in Maharashtra State, India. I have
          been coding for almost last{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            {new Date().getFullYear() - 2019}
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            years
          </span>{" "}
          and developing for almost last{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            {new Date().getFullYear() - 2020}
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            years
          </span>{" "}
          and did not stop till today! I love to develop{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Web
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            applications
          </span>{" "}
          and{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Hybrid
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            mobile
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            applications
          </span>
          . This is my personal portfolio website to showcase my{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Projects
          </span>
          ,{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Achievements
          </span>
          ,{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Experience
          </span>{" "}
          and{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Blogs
          </span>
          .
          <br />
          <br />I{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Develop
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            applications
          </span>
          ,{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Contribute
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            to
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Open
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Source
          </span>
          , and{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Give
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            back
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            to
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            the
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            community
          </span>
          . On top of that I also love to{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Spend
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            time
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            with
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            my
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            family
          </span>
          ,{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Go
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            out
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            on
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            walk
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            with
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            my
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            brother
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Luffy
          </span>
          ,{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Play
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            games
          </span>{" "}
          both on{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Mobile
          </span>{" "}
          and{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Personal
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Computer
          </span>{" "}
          and{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            Watch
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            movies
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            in
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            multiplex
          </span>{" "}
          etc! I am always ready to{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            learn
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            different
          </span>{" "}
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            skills
          </span>{" "}
          that I find relevant and emerging. Don&apos;t forget to go through the
          whole web application and dive into amazing world of tech from my shoe
          <span
            className={`${ubuntuFont.className} text-2xl uppercase about__text-specials`}
          >
            !!!
          </span>
        </p>
      </div>
      <div className="w-screen h-[120px] object-cover overflow-hidden">
        <Image
          src={`/about-partition.svg`}
          alt="About partition"
          height={100}
          width={10}
          className="w-screen h-[100%] object-cover"
        />
      </div>
    </div>
  );
}

export default About;
