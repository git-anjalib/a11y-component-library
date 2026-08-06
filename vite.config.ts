import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages: the site is served from a subfolder
  // (your-username.github.io/a11y-component-library), not the domain root,
  // so every asset path needs this prefix or they'll all 404.
  base: "/a11y-component-library/",
});
