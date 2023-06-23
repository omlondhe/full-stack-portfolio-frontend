export type ProjectCardType = {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
  type:
    | "Web app - Full Stack"
    | "Web app - Frontend only"
    | "Mobile app"
    | "Game";
  imageLink: string;
};
