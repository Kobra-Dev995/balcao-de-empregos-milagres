// /** @type {import('next').NextConfig} */

// const NextConfig = {
//   reactStrictMode: false,
// };

// const pwa = withPWA({
//   dest: 'public',
// });

// //export default NextConfig;

// export default pwa(NextConfig);

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
import nextPWA from '@ducanh2912/next-pwa';

const withPWA = nextPWA({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  // fallbacks: {
  //   //image: "/static/images/fallback.png",
  //   document: '/offline', // if you want to fallback to a custom page rather than /_offline
  //   // font: '/static/font/fallback.woff2',
  //   // audio: ...,
  //   // video: ...,
  // },
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "plus.unsplash.com",
        port: '',
      },
    ],
  },
};

export default withPWA(nextConfig);
