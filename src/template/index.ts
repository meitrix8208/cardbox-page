const routes = ["/api/env", "/api/stream", "/api/ip", "/api/hello"];
export default eventHandler((event) => {
  setResponseHeader(event, "Content-Type", "text/html; charset=utf-8");
  const body = html`
    <!DOCTYPE html>
    <html lang="es">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind-compat.min.css" /> -->
      <!-- <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/uno.global.js"></script> -->
      <link
      rel="preconnect"
      href="https://rsms.me/"
    />
    <link
      rel="stylesheet"
      href="https://rsms.me/inter/inter.css"
    />
      <link rel="stylesheet" href="${getURL("/dist/uno.reset.css")}" />
      <script src="${getURL("/dist/uno.global.js")}"></script>
      <title>Nitro Test Deployment</title>
    </head>

    <body un-cloak class="h-screen w-screen overflow-hidden">
      <div  class="bg-black flex justify-center items-center h-100dvh">
        <div
          class="bg-yellow-500 text-black p-4 rounded-lg max-w-lg border border-white border-2xl border-4 outline-4px outline outline-offset-0 outline-red-500">
          <img src="/favicon.png" class="w-5 h-5 inline-block translate-y--0.6 mr-2"></img>
          <a href="${getURL("/")}">
            <span class="font-bold">
              Nitro Test Deployment
            </span>
          </a>
          <div class="mt-3 pt-3 border-t-2 ">
            <div class="mb-3">
              Routes: (current route: ${event.path})
              <ul>
                ${routes
                  .map(
                    (link) =>
                      html` <li>
                        <a href="${getURL(link)}" class="underline">${link}</a>
                      </li>`
                  )
                  .join("\n")}
              </ul>
            </div>
            <div class="mt-3 pt-3 border-t-2 text-[14px] font-475">
              <div class="font-italic">
                Generated at ${new Date().toLocaleString()} with
                <br />
              </div>
              <div class="flex justify-center items-center">
                <a href="https://nitro.unjs.io/" class="underline font-bold items-center flex" target="_blank">
                  Nitro</a><span class="underline text-gray-200">@${
                    useRuntimeConfig().nitroVersion
                  }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
</body>
<style>
  [un-cloak] {
    display: none;
  }
  :root {
      font-family: Inter, sans-serif;
      font-feature-settings: "liga" 1, "calt" 1, "tnum" 1;
    }
    @supports (font-variation-settings: normal) {
      :root {
        font-family: InterVariable, sans-serif;
      }
    }
</style>

</html>
  `;
  return body;
});
