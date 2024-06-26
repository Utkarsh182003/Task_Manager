import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: false,
        type: "module",
      },

      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*"],
      },

      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#232e58",
        background_color: "#232e58",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Task Manager",
        description: "Task Manager: to manage all your task",
        name: "Task Manager",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "logo384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "favicon.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Add Task",
            description: "Add Task",
            url: "/add",
            icons: [
              {
                src: "add.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },
          {
            name: "Categories",
            description: "Task Categories",
            url: "/categories",
            icons: [
              {
                src: "categories.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },
          {
            name: "Import Export",
            description: "Import or Export Task",
            url: "/import-export",
            icons: [
              {
                src: "import-export.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },
          {
            name: "Profile",
            description: "User Profile",
            url: "/user",
            icons: [
              {
                src: "profile.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },
        ],
      },
    }),
  ],
});
