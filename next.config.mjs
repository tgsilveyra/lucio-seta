/** @type {import('next').NextConfig} */

const nextConfig = {
  output:  'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/lucio_seta'
};

export default nextConfig;
