/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
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
