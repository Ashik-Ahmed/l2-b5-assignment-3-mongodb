import express, { Application, Request, Response } from 'express';
import bookRoute from '../src/app/routes/book.route';
import borrowRoute from '../src/app/routes/borrow.route';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: '*' }));


app.get('/', (req: Request, res: Response) => {
    res.send('Server is Running!');
});


app.use('/api/books', bookRoute);
app.use('/api/borrow', borrowRoute);

export default app;