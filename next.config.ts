import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",        // leave empty for default
        pathname: "/**"  // allow all images under this domain
      },
    ],
  },
};

export default nextConfig;
