import { expect } from 'jsr:@std/expect'
import { Hono } from 'hono'
import { handle } from './handler.ts'

Deno.test('Should return 200 response', async () => {
  const app = new Hono()
  app.get('/api/author/:name', (c) => {
    const name = c.req.param('name')
    return c.json({
      path: '/api/author/:name',
      name,
    })
  })
  const handler = handle(app)
  const req = new Request('http://localhost/api/author/hono')
  const res = await handler({ request: req, params: { name: 'hono' } })
  expect(res.status).toBe(200)
  expect(await res.json()).toEqual({
    path: '/api/author/:name',
    name: 'hono',
  })
})
