import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Se for produção (GitHub Pages), usa o nome do repo. Se não, usa a raiz.
  base: mode === "production" ? "/Landing-Page-DevClub/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
