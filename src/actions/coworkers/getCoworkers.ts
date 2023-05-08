import { People } from "../../types";
import { db } from "@vercel/postgres";

export const getCorworkers = async (): Promise<People[]> => {
  "use server";
  const client = await db.connect();
  const results = await client.sql<People>`SELECT * FROM people`;
  const people = results.rows;
  return people;
};
