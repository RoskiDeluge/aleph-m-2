/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['links.papareact.com', 'aleph-m-2.s3.amazonaws.com']
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}
