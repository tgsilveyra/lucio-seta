/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "development" ? "" : "/lucio_seta",
  env: {
    BASE_PATH:
      process.env.NODE_ENV === "development"
        ? ""
        : "https://tgsilveyra.github.io/lucio_seta",
  },
};

export default nextConfig;
