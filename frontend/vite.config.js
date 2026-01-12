import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/Ki_lagbe_deploy",
  plugins: [react() , tailwindcss(),],
  server: {
    port: 5173
  }
});
