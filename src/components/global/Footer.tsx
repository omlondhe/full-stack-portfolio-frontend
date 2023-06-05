"use client";

import "@/styles/components/global/Footer.css";

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
    link: "https://github.com/omlondhe",
    backgroundColor: "white",
    icon: (
      <GitHubIcon
        className="social-icons"
        style={{ color: "black", fontSize: 30 }}
      />
    ),
  },
  {
    link: "https://www.linkedin.com/in/omlondhe",
    backgroundColor: "white",
    icon: (
      <LinkedInIcon
        className="social-icons"
        style={{ color: "#0B65C2", fontSize: 30 }}
      />
    ),
  },
  {
    link: "https://twitter.com/omlondhe2133",
    backgroundColor: "white",
    icon: (
      <TwitterIcon
        className="social-icons"
        style={{ color: "#1C9BEF", fontSize: 30 }}
      />
    ),
  },
  {
    link: "mailto:oplondhe@gmail.com",
    backgroundColor: "white",
    icon: (
      <EmailOutlinedIcon
        className="social-icons"
        style={{ color: "#D44E47", fontSize: 30 }}
      />
    ),
  },
  {
    link: "https://play.google.com/store/apps/developer?id=Om+Londhe&hl=en_IN&gl=US",
    backgroundColor: "white",
    icon: (
      <AndroidIcon
        className="social-icons"
        style={{ color: "#39D37F", fontSize: 30 }}
      />
    ),
  },
  {
    link: "https://www.instagram.com/omlondhe2133",
    backgroundColor: "white",
    icon: (
      <InstagramIcon
        className="social-icons"
        style={{ color: "black", fontSize: 30 }}
      />
    ),
  },
  {
    link: "https://www.youtube.com/@omlondhe",
    backgroundColor: "white",
    icon: (
      <YouTubeIcon
        className="social-icons"
        style={{ color: "#FF0000", fontSize: 30 }}
      />
    ),
  },
];

export default function Footer() {
  return (
    <InView>
      {({ ref, inView }) => (
        <footer
          ref={ref}
          className="footer h-[550px] w-full relative shadow mt-96"
        >
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
                    key={socialIconData.link}
                    onClick={() => window.open(socialIconData.link)}
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
