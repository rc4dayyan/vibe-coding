import { Elysia } from "elysia";
import { healthRoutes } from "./health";
import { userRoutes } from "./users-route";

export const mainRouter = new Elysia()
  .use(healthRoutes)
  .use(userRoutes);
