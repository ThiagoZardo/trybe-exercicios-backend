import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import UsersRoutes from './routes/users.routes'

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Exercicios 26.3');
});

app.use(UsersRoutes);

app.listen(PORT, () => {
  console.log(`On line na porta: ${PORT}`);
});