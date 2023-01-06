/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ['rasno-ph.s3.eu-west-3.amazonaws.com']
  },
    compiler: {
    styledComponents: {
      ssr: true
  }
    }

}

module.exports = nextConfig
