/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    // Set basePath depending on the environment (Github pages requires /github-pages, but local development doesn't)
    basePath: process.env.NODE_ENV === 'production' ? '/github-pages' : '',
  }
  
  module.exports = nextConfig
  