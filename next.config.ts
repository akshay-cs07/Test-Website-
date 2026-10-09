import type { NextConfig } from "next";

// Set for GitHub Pages project sites, e.g. "/Test-Website-". Empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isStaticExport ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // GitHub Pages serves directories, so /publications/ must resolve to a real path.
  trailingSlash: isStaticExport,
  images: {
    // No image optimization server on static hosts.
    unoptimized: isStaticExport,
    // Allow images from any external URL (both http and https)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;