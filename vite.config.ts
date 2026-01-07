import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ["lib", "src/components"], // Only generate types for actual code
      exclude: ["src/stories", "**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
  build: {
    lib: {
      // This is the entry point for your components
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "BrickBotUI",
      fileName: "brickbot-ui",
      formats: ["es"], // Modern apps mostly use ESM
    },
    rollupOptions: {
      // Ensure we don't bundle React with the library
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
