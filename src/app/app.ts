import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from '../database/modules/student/student.route';

//parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('create my first mongoose exprees and typescript server');
});

export default app;
