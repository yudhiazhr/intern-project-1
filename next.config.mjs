/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        forceSwcTransforms: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "**",
            }
        ]
    }
};

export default nextConfig;
