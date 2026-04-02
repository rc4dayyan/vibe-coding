import { Elysia, t } from "elysia";
import { db } from "../db/client";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export const userRoutes = new Elysia({ prefix: "/users" })
  .get("/", async () => {
    return await db.select().from(users);
  })
  .get("/:id", async ({ params: { id } }) => {
    const result = await db.select().from(users).where(eq(users.id, Number(id)));
    if (result.length === 0) throw new Error("User not found");
    return result[0];
  })
  .post("/", async ({ body }) => {
    return await db.insert(users).values(body);
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: "email" }),
    }),
  });
