import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/logo",
        destination: "/logo/transparan-logo-zoom.png",
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
