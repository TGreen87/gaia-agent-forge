/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure we can deploy under subpaths if needed
  basePath: '',
  experimental: {},
};

export default nextConfig;
