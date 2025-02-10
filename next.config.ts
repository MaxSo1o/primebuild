import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'http',
              hostname: '79.174.86.248',
              port: '1337',
              pathname: '/uploads/**',
              search: ''
          }
      ]
  }
};

export default nextConfig;
