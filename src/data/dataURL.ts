export const URL =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
    ? "http://localhost:3000"
    : "https://full-stack-portfolio-backend.vercel.app/";
