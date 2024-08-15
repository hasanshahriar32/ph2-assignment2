import express, { Request, Response, Application } from "express";
import cors from "cors";
const app: Application = express();

// parsers
app.use(express.json());   // if you do not use parser, then you wont be able to read the req.body or response.body data in json
app.use(cors());     // for resolving cors issue
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
