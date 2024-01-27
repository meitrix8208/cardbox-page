export default eventHandler(() => {
  const body = html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Nitro Test Deployment - secret page" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/uno.global.js"></script> -->
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="${getURL("/dist/uno.reset.css")}" />
        <script src="${getURL("/dist/uno.global.js")}"></script>
        <title>Nitro Test Deployment</title>
      </head>

      <body un-cloak class="h-screen w-screen overflow-hidden">
        <div class="bg-black flex justify-center items-center h-100dvh">
          <div
            class="bg-yellow-500 text-black p-4 rounded-lg max-w-lg border border-white border-2xl border-4 outline-4px outline outline-offset-0 outline-red-500"
          >
            <a href="${getURL("/api/hello?bye=true")}">Click me</a>
          </div>
        </div>
      </body>
      <style>
        [un-cloak] {
          display: none;
        }
        :root {
          font-family: Inter, sans-serif;
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
