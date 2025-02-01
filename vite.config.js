import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensures all routes go to index.html
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
