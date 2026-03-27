import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@facebook-tracking/shared-types",
    "@facebook-tracking/shared-utils"
  ]
};

export default nextConfig;
