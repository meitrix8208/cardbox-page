import process from "node:process";

const tokenRe = /password|token|key|secret/i;
function safeObj(env: Record<string, string> = {}) {
  return Object.fromEntries(
    Object.entries(env).filter(([key]) => !tokenRe.test(key)),
  );
}

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}
export default eventHandler((event) => {
  setResponseHeader(event, "Content-Type", "application/json; charset=utf-8");
  return {
    processEnv: safeObj(import.meta.env),
    runtimeConfig: safeObj(useRuntimeConfig()),
  };
});
