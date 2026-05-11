# hello-emdash

A love letter to [Hello Dolly](https://wordpress.org/plugins/hello-dolly/) — the iconic WordPress plugin — rebuilt for [EmDash CMS](https://emdashcms.com/).

Displays a random quote from computing pioneers in your admin dashboard. A small reminder that you are part of a long tradition of people building things with code.

## Installation

```bash
npm install github:deshabhishek007/hello-emdash
```

## Usage

Add the plugin to your `astro.config.mjs`:

```js
import { helloEmdashPlugin } from "hello-emdash";
import emdash from "emdash/astro";

export default defineConfig({
  integrations: [
    emdash({
      plugins: [helloEmdashPlugin()],
    }),
  ],
});
```

A **Daily Quote** widget will appear on your EmDash admin dashboard. Click **Next Quote** to cycle to a new one.

## Quotes

Wisdom from the people who built the world we code in — Dijkstra, Turing, Torvalds, Berners-Lee, Grace Hopper, Alan Kay, and more.

## Compatibility

| EmDash | hello-emdash |
| ------ | ------------ |
| ≥ 0.9  | 0.1.x        |

Works in both trusted (Node.js) and sandboxed (Cloudflare Workers) modes.

## License

MIT © [Abhishek](https://github.com/deshabhishek007)
