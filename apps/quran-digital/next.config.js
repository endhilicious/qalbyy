/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // removed images.unoptimized to enable Next image optimization under Vercel
  transpilePackages: ['@repo/ui'],
};

export default nextConfig;
