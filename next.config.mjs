/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.jeerankpredictor.in",
          },
        ],
        destination: "https://jeerankpredictor.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
