import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath:
    process.env.NODE_ENV === "development" ? undefined : "/rezaheydarii",
  assetPrefix:
    process.env.NODE_ENV === "development" ? undefined : "/rezaheydarii/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
