import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
  outputFileTracingRoot: process.cwd(),
  typescript: { tsconfigPath: "tsconfig.static.json" },
};

export default nextConfig;
