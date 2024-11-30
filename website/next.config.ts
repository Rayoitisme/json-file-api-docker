import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8081/v1/:path*', // Redireciona para a API
      },
    ];
  },
};

export default nextConfig;
