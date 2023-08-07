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
  async headers() {
    return [
      // ... Otras configuraciones de caché para activos inmutables ...

      {
        source: "/", // Ruta de la página que deseas almacenar en caché
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Caché durante un año para la página SSR
          },
        ],
      },
      {
        source: "/profiles", // Ruta de la página que deseas almacenar en caché
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Caché durante un año para la página SSR
          },
        ],
      },
      {
        source: "/movie:id", // Ruta de la página que deseas almacenar en caché
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Caché durante un año para la página SSR
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
