const routes = ["/api/env", "/api/stream", "/api/ip", "/api/hello"];
export default eventHandler((event) => {
  setResponseHeader(event, "Content-Type", "text/html; charset=utf-8");
  const body = html`
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      name="description"
      content="Nitro Test Deployment"
    />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="stylesheet" href="${getURL("/dist/uno.reset.css")}" />
    <script defer src="${getURL("/dist/uno.global.js")}"></script>
    <title>Nitro Test Deployment</title>
  </head>

  <body
    un-cloak
    class="h-screen w-screen overflow-hidden"
  >
    <main class="bg-black flex justify-center items-center h-100vh">
      <section
        class="bg-yellow-500 text-black p-4 rounded-lg max-w-lg border border-white border-2xl border-4 outline-4px outline outline-offset-0 outline-red-500"
      >
        <img alt="Nitro Test Deployment" src="/favicon.svg" class="w-5 h-5 inline-block translate-y--0.6 mr-2"></img>
        <a href="${getURL("/")}">
        <span class="font-bold"> Nitro Test Deployment </span>
        </a>
        <div class="mt-3 pt-3 border-t-2">
          <div class="mb-3">
            Routes: (current route: ${event.path})
            <ul>
              ${routes
                .map(
                  link => html`
                    <li>
                      <a href="${getURL(link)}" class="underline">${link}</a>
                    </li>
                  `,
                )
                .join("\n")}
            </ul>
          </div>
          <footer class="mt-3 pt-3 border-t-2 text-[14px] font-475">
            <div class="font-italic">
              Generated at ${new Date().toLocaleString("en-US", {
                hour12: false,
                hourCycle: "h24",
              })} with
              <br />
            </div>
            <div class="flex justify-center items-center">
              <a
                href="https://nitro.unjs.io/"
                class="underline font-bold items-center flex"
                target="_blank"
              >
                Nitro</a
              ><span class="underline font-bold text-red-900"
                >@${useRuntimeConfig().nitroVersion}</span
              >
            </div>
          </footer>
        </div>
      </section>
    </main>
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
    @font-face {
      font-family: "interVariable";
      src: url("/dist/InterVariable.woff2") format("woff2");
      font-display: swap;
    }
    @font-face {
      font-family: "interVariableItalic";
      src: url("/dist/InterVariable-Italic.woff2") format("woff2");
      font-display: swap;
    }
  </style>
</html>

  `;
  return body;
});
