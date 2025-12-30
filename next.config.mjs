/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
   compiler: {
    styledComponents: true
  },
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

export default nextConfig;
