import { Elysia } from "elysia";
import { healthRoutes } from "./health";
import { userRoutes } from "./users";

export const mainRouter = new Elysia()
  .use(healthRoutes)
  .use(userRoutes);
