/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.co',
      },
    ],
  },

  // /programs was removed when the site narrowed to books only. It had been
  // live and in the sitemap, so send it somewhere useful rather than 404.
  async redirects() {
    return [
      { source: '/programs', destination: '/', permanent: true },
      { source: '/programs/:path*', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
