import { Buffer } from "node:buffer";

export default eventHandler(async (event) => {
  const host = getRequestHost(event, { xForwardedHost: true });
  const protocol = getRequestProtocol(event, { xForwardedProto: true });
  const ip = getRequestIP(event, { xForwardedFor: true });
  const args = getQuery(event);
  const headers = getRequestHeaders(event);
  const url = new URL(event.node.req.url, `${protocol}://${host}`);
  const path = event.path.split("?")[0];
  let geo = {};
  if (headers["x-nf-geo"]) {
    try {
      geo = JSON.parse(Buffer.from(headers["x-nf-geo"], "base64").toString("utf-8"));
    }
    catch (error) {
      geo = { error };
      console.error("Failed to parse geo information:", error);
    }
  }

  return {
    method: event.method,
    url,
    ip,
    geo,
    host,
    headers,
    path,
    args,
  };
});
