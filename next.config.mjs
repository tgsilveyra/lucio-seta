/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "development" ? "" : "",
  env: {
    BASE_PATH: process.env.NODE_ENV === "development" ? "" : "",
  },
  sassOptions: {
    prependData: `@import "src/app/styles/utils.scss";`,
  },
};

export default nextConfig;
