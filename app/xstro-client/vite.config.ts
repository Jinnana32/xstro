import { defineConfig } from "vite";
import path, { resolve } from "path";
import react from "@vitejs/plugin-react";

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(projectRootDir, "./src") },
      {
        find: "@assets",
        replacement: path.resolve(projectRootDir, "./src/assets"),
      },
      {
        find: "@components",
        replacement: path.resolve(projectRootDir, "./src/components"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(projectRootDir, "./src/hooks"),
      },
      {
        find: "@utils",
        replacement: path.resolve(projectRootDir, "./src/utils"),
      },
    ],
  },
});
