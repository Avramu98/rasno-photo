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
    },
    experimental: {
        optimizeCss: true
    }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})

module.exports = nextConfig
