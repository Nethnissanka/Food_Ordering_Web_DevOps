import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    host: "0.0.0.0",
  },
  test: {
    environment: "node", // Since we're testing Node.js code (MongoDB)
    globals: true, // Optional: enables globals like describe, it, expect
    setupFiles: [], // You can add setup files if needed
  },
});
