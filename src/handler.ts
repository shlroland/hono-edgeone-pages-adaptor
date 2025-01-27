import { Env, Hono, Schema } from "hono";
import { EdgeonePagesContext } from "./types.ts";

export const handle =  <
E extends Env = Env,
S extends Schema = Record<string | number | symbol, unknown>,
BasePath extends string = "/",
>(  app: Hono<E, S, BasePath>,) => {
  return (context: EdgeonePagesContext) => {
    return app.fetch(context.request, {
      params: context.params,
    });
  };
};
// test
