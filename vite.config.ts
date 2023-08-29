import { defineConfig } from "vite";
import { VitePWA, } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "My Football Tracker",
        short_name: "My Football Tracker",
        description: "An app that allows you to track your football matches.",
        icons: [
          {
            src: "/icons/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "/icons/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/maskable_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#000000",
        background_color: "#e8ebf2",
        display: "standalone",
        scope: "./",
        start_url: "/",
        orientation: "portrait",
      },
    }),
  ],
});
