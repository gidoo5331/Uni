/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig
module.exports = {
  nextConfig : {
    reactStrictMode: true,
    swcMinify: true,
  },

  async redirects() {
    return [
      {
        // this will match `/english(default)/something` being requested
        source: '/siginIn',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
