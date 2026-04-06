import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // Essencial para GitHub Pages e Firebase
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Para o Shadcn/UI funcionar
    },
  },
});
