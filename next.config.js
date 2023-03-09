/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['rasno-ph.s3.eu-west-3.amazonaws.com', 'rasno-photo-prod.s3.eu-west-3.amazonaws.com', 'lh3.googleusercontent.com']
    },
    experimental: {
        optimizeCss: true,
        fontLoaders: [
            {loader: '@next/font/google', options: {subsets: ['latin']}}
        ]
    },
    compiler: {
        styledComponents: {
            ssr: true
        }
    }
}

// const withBundleAnalyzer = require('@next/bundle-analyzer', {
//     enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer(nextConfig)
module.exports = nextConfig
