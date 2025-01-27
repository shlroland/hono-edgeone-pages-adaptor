# Hono EdgeOne Pages Adapter

This is a adapter for Hono to be used with [EdgeOne Pages](https://edgeone.ai/products/pages).

## Installation

```bash
# npm
npm install hono-edgeone-pages-adapter

# pnpm
pnpm add hono-edgeone-pages-adapter

# yarn
yarn add hono-edgeone-pages-adapter

# bun
bun add hono-edgeone-pages-adapter

# jsr
deno add jsr:@shlroland/hono-edgeone-pages-adapter
```

## Usage

```ts
// function/[[...route]]/index.ts
import { handle } from 'hono-edgeone-pages-adapter'

const app = new Hono()
app.get('/api/author/:name', (c) => {
  return c.json({ name: c.req.param('name') })
})

const onRequest = handle(app)
```

