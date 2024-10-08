/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "plus.unsplash.com"
      },
      {
        hostname: "avatars.githubusercontent.com"
      }
    ]
  }
};

export default nextConfig;
