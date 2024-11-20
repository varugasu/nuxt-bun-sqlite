import { db } from "./db";
import { migrate as drizzleMigrate } from "drizzle-orm/bun-sqlite/migrator";

export const migrate = async () => {
  await drizzleMigrate(db, {
    migrationsFolder: "./drizzle",
  });
};
