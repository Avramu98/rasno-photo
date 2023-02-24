/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['rasno-ph.s3.eu-west-3.amazonaws.com']
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

module.exports = nextConfig
