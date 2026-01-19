/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use localhost instead of 0.0.0.0 to avoid permission issues
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
