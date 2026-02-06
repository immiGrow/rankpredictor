/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // DO NOT add experimental: { runtime: 'edge' } here yet
  // as it can conflict with the proxy/middleware logic in Next 16
};

export default nextConfig;