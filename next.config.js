/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
    images: {
        domains: ['fastbuddys.com'], // Add the domain(s) from which you're loading images
    },
    webpack: (config, { isServer }) => {
        // For MP4 files
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next',
                    name: 'static/media/[name].[ext]', // Output path for the media files
                },
            },
        });

        return config;
    },
};