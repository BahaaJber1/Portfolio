import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@components": resolve("./src/components"),
            "@features": resolve("./src/features"),
            "@ui": resolve("./src/ui"),
            "@store": resolve("./src/store"),
            "@pages": resolve("./src/pages"),
            "@hooks": resolve("./src/hooks"),
            "@constants": resolve("./src/constants"),
            "@lib": resolve("./src/lib"),
        },
    },
});
