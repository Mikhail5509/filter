import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/filter/", // Укажи название твоего репозитория на GitHub
});
