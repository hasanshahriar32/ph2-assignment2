import dotenv from "dotenv";
import path from "path";
// process.cwd() returns the current working directory of the Node.js process.
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 3000,
  database_url: process.env.MONGO_URI,
};
