const tokenRe = /password|token|key|secret/i;

function safeObj(env: Record<string, string> = {}) {
  return Object.fromEntries(
    Object.entries(env).filter(([key]) => !tokenRe.test(key))
  );
}

export default eventHandler((event) => {
  setResponseHeader(event, "Content-Type", "application/json; charset=utf-8");
  return {
    processEnv: safeObj(process.env),
    runtimeConfig: safeObj(useRuntimeConfig()),
  };
});
