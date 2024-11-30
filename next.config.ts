import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.BASE_PATH,
  output: 'standalone',
};

export default nextConfig;
