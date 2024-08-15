/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ap-northeast-1.graphassets.com'
      },
    ]
  },
};

export default nextConfig;
