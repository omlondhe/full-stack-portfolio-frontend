"use client";

import "@/styles/components/Footer.css";

import { Signika } from "next/font/google";
import { Libre_Barcode_128_Text } from "next/font/google";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AndroidIcon from "@mui/icons-material/Android";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const signika = Signika({ subsets: ["latin"], weight: "400" });
const libreBarcode128TextFont = Libre_Barcode_128_Text({
  subsets: ["latin"],
  weight: "400",
});

const socialIconsData: {
  link: string;
  backgroundColor: string;
  icon: JSX.Element;
}[] = [
  {
    link: "",
    backgroundColor: "white",
    icon: <GitHubIcon style={{ color: "black" }} />,
  },
  {
    link: "",
    backgroundColor: "white",
    icon: <LinkedInIcon style={{ color: "#0B65C2" }} />,
  },
  {
    link: "",
    backgroundColor: "white",
    icon: <TwitterIcon style={{ color: "#1C9BEF" }} />,
  },
  {
    link: "",
    backgroundColor: "white",
    icon: <EmailOutlinedIcon style={{ color: "#D44E47" }} />,
  },
  {
    link: "",
    backgroundColor: "white",
    icon: <AndroidIcon style={{ color: "#39D37F" }} />,
  },
  {
    link: "",
    backgroundColor: "white",
    icon: <InstagramIcon style={{ color: "black" }} />,
  },
  {
    link: "",
    backgroundColor: "white",
    icon: <YouTubeIcon style={{ color: "#FF0000" }} />,
  },
];

export default function Footer() {
  const [inView, setInView] = useState(false);

  return (
    <InView onChange={setInView}>
      {({ ref, inView }) => (
        <footer ref={ref} className="footer h-[550px] w-full relative shadow">
          <section
            className={`footer__main pt-10 pb-10 pl-5 pr-5 rounded-lg absolute shadow bg-white border ${
              inView ? "footer__main-in-view" : "footer__main-not-in-view"
            }`}
          >
            <div
              className={`footer__main-social flex-col justify-center align-middle mb-10 text-center  ${
                inView
                  ? "footer__main-social-in-view"
                  : "footer__main-social-not-in-view"
              }`}
            >
              <p
                className={`uppercase text-xl mb-2 select-none ${signika.className}`}
              >
                Let's connect using
              </p>
              <div
                className={`flex align-middle justify-center w-fit mx-auto gap-5 border-t-2 pt-2 overflow-hidden max-w-full flex-wrap`}
              >
                {socialIconsData.map((socialIconData) => (
                  <IconButton
                    style={{ background: socialIconData.backgroundColor }}
                    className={`footer__main-social-icons rounded-full ${
                      inView
                        ? "footer__main-social-icons-in-view"
                        : "footer__main-social-icons-not-in-view"
                    }`}
                  >
                    {socialIconData.icon}
                  </IconButton>
                ))}
              </div>
            </div>
            <div className="text-center w-fit px-5 mx-auto">
              <p
                className={`text-4xl select-none ${libreBarcode128TextFont.className}`}
              >
                <span
                  className={`inline-block ${
                    inView
                      ? "footer__text-in-view"
                      : "footer__text-not-in-view-left"
                  }`}
                >
                  Developed
                </span>
                &nbsp;
                <span
                  className={`inline-block ${
                    inView
                      ? "footer__text-in-view"
                      : "footer__text-not-in-view-left"
                  }`}
                >
                  by
                </span>
                &nbsp;
                <span
                  className={`inline-block ${
                    inView
                      ? "footer__text-in-view"
                      : "footer__text-not-in-view-mid"
                  }`}
                >
                  OM PRASHANT LONDHE
                </span>
                &nbsp;
                <span
                  className={`inline-block ${
                    inView
                      ? "footer__text-in-view"
                      : "footer__text-not-in-view-right"
                  }`}
                >
                  using
                </span>
                &nbsp;
                <span
                  className={`inline-block ${
                    inView
                      ? "footer__text-in-view"
                      : "footer__text-not-in-view-right"
                  }`}
                >
                  NEXT.JS
                </span>
              </p>
            </div>
          </section>
        </footer>
      )}
    </InView>
  );
}
