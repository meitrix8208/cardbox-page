import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const nitroPkg = require("nitropack/package.json");
//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "./src",
  preset: "netlify",
  renderer: "./src/template",
  runtimeConfig: {
    nitroVersion: nitroPkg.version,
  },
  compressPublicAssets: {
    gzip: true,
    brotli: true,
  },
  publicAssets: [
    {
      baseURL: "/dist",
      dir: "./public/dist",
      maxAge: 60 * 60 * 24 * 365,
    },
  ],
});
