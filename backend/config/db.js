import { neon } from "@neondatabase/serverless"
import "dotenv/config";

// this creates the sql connection using the database url from the environemnt variable
export const sql = neon(process.env.DATABASE_URL)