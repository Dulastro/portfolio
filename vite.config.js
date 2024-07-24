import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Define o diretório de saída
  },
  base: "/", // Define o caminho base para os recursos
});
