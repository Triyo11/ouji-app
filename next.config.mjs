/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "plus.unsplash.com"
      },
      {
        hostname: "avatars.githubusercontent.com"
      },
      {
        hostname: "gitlab.com"
      },
      {
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
};

export default nextConfig;
