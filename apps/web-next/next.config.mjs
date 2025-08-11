/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
