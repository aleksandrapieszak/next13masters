/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts','tsx','mdx'],
    experimental: {
        typedRoutes: false,
        mdxRs: true
    }
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
