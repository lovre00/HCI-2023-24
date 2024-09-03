/** @type {import('next').NextConfig} */

module.exports = {
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[]",
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'postimage.org',
            port: '',
            pathname: '',
          },
        ],
      },
 };
