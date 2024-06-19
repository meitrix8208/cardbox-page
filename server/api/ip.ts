export default eventHandler(async (event) => {
  const UserAgent = await getRequestFingerprint(event, {
    userAgent: true,
    xForwardedFor: false,
    method: false,
    path: false,
    hash: false,
    ip: false,
  });
  const host = getRequestHost(event, { xForwardedHost: true });
  const ip = await fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(res => res.ip);

  setResponseHeader(event, "Content-Type", "application/json");
  return {
    ip,
    host,
    method: event.method,
    path: event.path,
    userAgent: UserAgent,
  };
});
