import { Env, Hono, Schema } from 'hono'
import { EdgeonePagesContext } from './types.ts'

export const handle = <
  E extends Env = Env,
  S extends Schema = Schema,
  BasePath extends string = '/',
>(app: Hono<E, S, BasePath>): (context: EdgeonePagesContext) => Response | Promise<Response> => {
  return (context) => {
    return app.fetch(context.request, {
      params: context.params,
    })
  }
}
