import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "../config/env";
import * as schema from "./schema";

const poolConnection = mysql.createPool(env.DATABASE_URL as string);

export const db = drizzle(poolConnection, { schema, mode: "default" });
