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
  const query = getQuery(event);
  const headers = getRequestHeaders(event);
  return {
    method: event.method,
    ip,
    host,
    headers,
    path: event.node.req.url,
    userAgent: UserAgent,
    args: query,
  };
});
