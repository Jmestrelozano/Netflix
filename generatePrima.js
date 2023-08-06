// generatePrisma.js

const { execSync } = require("child_process");

// Ejecutar prisma generate
try {
  execSync("npx prisma generate");
  console.log("Prisma Client generado correctamente.");
} catch (error) {
  console.error("Error al generar Prisma Client:", error.message);
  process.exit(1);
}
