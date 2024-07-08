import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    base: "/",
    plugins: [react()],
    server: {
      port: 5173,
    },
    preview: {
      host: "0.0.0.0",
      port: 8000,
    },
  };
});
