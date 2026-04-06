import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Use './' para garantir que os assets funcionem em qualquer subpasta (Firebase ou GH Pages)
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Opcional: Garante que o build não pare por avisos de CSS do Tailwind
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
