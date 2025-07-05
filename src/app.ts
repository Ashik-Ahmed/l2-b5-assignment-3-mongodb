import express, { Application, Request, Response } from 'express';
import bookRoute from '../src/app/routes/book.route';
import borrowRoute from '../src/app/routes/borrow.route';
import cors from 'cors';

const app: Application = express();

app.use(
    cors({
        origin: ['http://localhost:5173', 'https://l2-b5-assignment-4-redux.vercel.app']
    })
);
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Server is Running!');
});


app.use('/api/books', bookRoute);
app.use('/api/borrow', borrowRoute);

export default app;