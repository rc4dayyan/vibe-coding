import { Elysia } from "elysia";
import { mainRouter } from "./routes";
import { env } from "./config/env";

const app = new Elysia()
  .use(mainRouter)
  .onError(({ error, code }) => {
    if (code === "NOT_FOUND") return { error: "Not found", status: 404 };
    console.error(error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return { error: message, status: 500 };
  })
  .listen(env.PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
