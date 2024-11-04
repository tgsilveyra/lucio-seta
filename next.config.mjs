/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "development" ? "" : "/lucio-seta",
  env: {
    BASE_PATH: process.env.NODE_ENV === "development" ? "" : "/lucio-seta",
  },
};

export default nextConfig;
