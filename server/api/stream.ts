export default eventHandler((event) => {
  setResponseHeader(event, "Content-Type", "text/html; charset=utf-8");
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const write = (chunk: string) => {
        controller.enqueue(encoder.encode(chunk));
      };
      write(
        html`<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8" />
              <title>Nitro Streaming Demo</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta name="description" content="Nitro Streaming Demo" />
              <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
              <style>
                :root {
                  font-family: Inter, sans-serif;
                  font-feature-settings: "tnum" 1;
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
                body {
                  color: #fff;
                  background: #333;
                  font-size: 1.5em;
                  padding: 2em;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin: 0;
                  text-align: center;
                  max-width: 1200px;
                  margin: 0 auto;
                  text-align: justify;
                }
                a {
                  color: #fff;
                }
                h1 {
                  font-size: 3em;
                  margin: 0.5em 0;
                }
                @media only screen and (max-width: 860px) {
                  body {
                    font-size: 1.2em;
                    padding: 1em;
                  }
                  h1 {
                    font-size: 1.7em;
                  }
                }
              </style>
            </head>
            <body>
              <h1>Nitro Streaming Demo</h1>
              <br />
              <a
                href="https://github.com/meitrix8208/nitro-render/blob/main/src/routes/api/stream.ts"
              >
                Source Code
              </a>
              <br />
              <br />
            </body>
          </html>`
      );
      const text = `Nitro, an open source TypeScript framework, empowers you to create web servers that run anywhere, offering a range of impressive features such as rapid development through a zero config setup with hot module replacement for server code in development, a versatile deployment capability that allows for codebase deployment to any provider without extra configuration, and a portable and compact design, effectively eliminating the need for 'node_modules' with an output size of less than 1MB. Its filesystem routing feature automatically registers server and API routes, while maintaining a minimal design to fit into any solution with minimum overhead. The framework supports asynchronous chunk loading via code-splitting for a fast server startup time and response. Inherent TypeScript support is provided with several additional enhancements. Nitro also offers a multi-driver, platform-agnostic storage system, a powerful built-in caching API, and is highly customizable through its plugins hooks system. It further enhances code clarity with an auto imports feature, which automatically imports utilities for a minimal and clean codebase, adding only the used ones to the final bundle. Remarkably, Nitro maintains backward compatibility, enabling the use of legacy npm packages, CommonJS, and mocking Node.js modules for workers. This engine, openly powering Nuxt, is accessible to all, paving the way for a versatile and user-friendly web server development experience.`;
      for (const token of text.split(" ")) {
        write(token + " ");
        await waitFor(35);
      }
      controller.close();
    },
  });
  return stream;
});
function waitFor(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
