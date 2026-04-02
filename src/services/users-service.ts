import { db } from "../db/client";
import { users, type NewUser } from "../db/schema";
import { eq } from "drizzle-orm";

export const registerUser = async (payload: NewUser) => {
  // 1. Cek Duplikasi Email
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, payload.email))
    .limit(1);

  if (existingUser.length > 0) {
    return { error: "email sudah terdaftar" };
  }

  // 2. Hash Password (menggunakan Bun.password.hash yang secara default memakai bcrypt)
  const hashedPassword = await Bun.password.hash(payload.password);

  // 3. Simpan ke Database
  await db.insert(users).values({
    ...payload,
    password: hashedPassword,
  });

  return { data: "OK" };
};
