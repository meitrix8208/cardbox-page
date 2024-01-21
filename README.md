# Nitro Test Deployment

<!-- img from favicon in the repo -->

<img src="./src/public/favicon.png" style="margin-left: auto; margin-right: auto; display: block; width: 80px; height: 80px;" alt="Nitro Logo" />

## Site

<https://nitro-deploy-test.netlify.app/>

powered by [Nitro](https://nitro.unjs.io)
[Unocss](https://unocss.dev)
[Netlify](https://netlify.com)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
pnpm run dev
```

## Production

Build the application for production:

set env variable `NITRO_PRESET` to `service-worker`

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm dlx serve .output/public -l 1248
```

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.
