/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Allow production builds to succeed even when ESLint isn't available
    // (e.g. deployments that omit devDependencies).
    ignoreDuringBuilds: true
  }
};
export default nextConfig;
