import { db } from "../../database";

export default defineEventHandler(async (event) => {
  console.log(db);

  return {
    message: "Hello, world!",
  };
});
