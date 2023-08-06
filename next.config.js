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
    // Ejecutar `prisma generate` antes de iniciar la compilación
    execSync("npx prisma generate");
    return [];
  },
};

module.exports = nextConfig;
