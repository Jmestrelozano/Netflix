/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "upload.wikimedia.org",
      "uhdtv.io",
      "mango.blender.org",
      "download.blender.org",
    ],
  },
  async rewrites() {
    // Ejecutar el script para generar Prisma Client antes de iniciar la compilación
    require("./generatePrisma.js");
    return [];
  },
};

module.exports = nextConfig;
