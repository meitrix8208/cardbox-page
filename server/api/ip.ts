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
  const ip = getRequestIP(event, { xForwardedFor: true });

  return {
    ip,
    host,
    method: event.method,
    path: event.path,
    userAgent: UserAgent,
  };
});
