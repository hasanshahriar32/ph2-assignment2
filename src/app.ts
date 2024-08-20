import express, { Request, Response, Application } from "express";
import cors from "cors";
const app: Application = express();

import { studentRouter } from './modules/student/student.route'

// parsers
app.use(express.json());   // if you do not use parser, then you wont be able to read the req.body or response.body data in json
app.use(cors());     // for resolving cors issue
app.use('/api/v1/students', studentRouter);

app.get('/api/v1', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
