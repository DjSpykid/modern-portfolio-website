import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static site generation
  // assetPrefix: './', // Ensure correct relative paths for static assets
  trailingSlash: true, // Add trailing slash for static hosting compatibility
  ignoreBuildErrors: true, // Ignore TypeScript and other build errors
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true, // Suppress source map uploading logs during build
    org: "spykid-tech-industry", // Replace with your Sentry organization slug
    project: "javascript-nextjs", // Replace with your Sentry project slug
  },
  {
    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with older browsers (increases bundle size)
    transpileClientSDK: true,

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    automaticVercelMonitors: true,
  }
);
