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
});
