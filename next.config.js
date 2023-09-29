/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts','tsx','mdx'],
    experimental: {
        typedRoutes: false,
        mdxRs: true
    },
    images:{
        domains:["media.graphassets.com"]
    },
    redirects: async () =>{
        return [
            {
                source: "/products/categories/t-shirts",
                destination: "/products/categories/t-shirts/1",
                permanent: false
            }
        ]
    }
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
