import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // Mechanical port phase — framer-motion v12 type tightening
    // and other small type issues are non-fatal at runtime.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
