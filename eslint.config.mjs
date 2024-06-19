import defineConfig from "@antfu/eslint-config";

export default defineConfig({
  stylistic: {
    quotes: "double",
    semi: true,
    indent: 2,
  },
  rules: {
    "no-console": "off",
  },
  ignores: ["node_modules", "dist", ".output"],
});
