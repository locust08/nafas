import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  turbopack: { root: process.cwd() },
  devIndicators: false,
  output: "standalone",
};

export default nextConfig;
