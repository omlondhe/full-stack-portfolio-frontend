"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

function GithubIcon() {
  return <GitHubIcon style={{ color: "black", fontSize: 35 }} />;
}

function LightModeIcon() {
  return <LightModeRoundedIcon fontSize="large" className="text-[#ffffff]" />;
}

function DarkModeIcon() {
  return <DarkModeRoundedIcon fontSize="large" className="text-[#000000]" />;
}

export { GithubIcon, LightModeIcon, DarkModeIcon };
