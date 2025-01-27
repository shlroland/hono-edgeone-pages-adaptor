import { build, emptyDir } from 'https://deno.land/x/dnt/mod.ts'

await emptyDir('./npm')

await build({
  entryPoints: ['./src/index.ts'],
  outDir: './npm',
  shims: {
    deno: true,
  },
  package: {
    name: 'hono-edgeone-pages-adapter',
    version: '0.0.1',
    description: 'Hono adapter for EdgeOne Pages',
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/shlroland/hono-edgeone-pages-adapter.git',
    },
    bugs: {
      url: 'https://github.com/shlroland/hono-edgeone-pages-adapter/issues',
    },
  },
  typeCheck: false,
  test: false,
})
