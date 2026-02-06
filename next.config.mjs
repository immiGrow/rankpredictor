/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force the edge runtime for the proxy/middleware layer
  experimental: {
    runtime: 'edge',
  }
};

export default nextConfig;