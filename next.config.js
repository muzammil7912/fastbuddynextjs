/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
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