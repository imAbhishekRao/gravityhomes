/** @type {import('next').NextConfig} */

const path = require('path')


module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: false,
    },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|css|js)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/project/gravity-nakshatra/',
        destination: '/',
        permanent: true,
      },
    ]
  },
}