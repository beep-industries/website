/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["beep.ovh", "localhost"],
  },
}

export default nextConfig
