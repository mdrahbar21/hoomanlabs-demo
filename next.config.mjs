/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
  images: {
    domains: ["storage.googleapis.com"], // Specify external domains here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/eleven-public-cdn/images/**", // Adjust this as needed for different paths or domains
      },
    ],
    // deviceSizes: [640, 768, 1024, 1280, 1600], // Define sizes for responsive images
    // imageSizes: [16, 32, 48, 64, 96], // Define fixed sizes for images
  },
};

export default nextConfig;
