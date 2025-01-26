import { Env, Hono, Schema } from "hono";
import { EdgeonePagesContext } from "./types";

export const handle =  <
E extends Env = Env,
S extends Schema = {},
BasePath extends string = "/",
>(  app: Hono<E, S, BasePath>,) => {
  return (context: EdgeonePagesContext) => {
    return app.fetch(context.request, {
      params: context.params,
    });
  };
};
