import express, { Application, Request, Response } from 'express';
import bookRoute from './routes/book.route';
import borrowRoute from './routes/borrow.route';

const app: Application = express();

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Server is Running!');
});


app.use('/api/books', bookRoute);
app.use('/api/borrow', borrowRoute);

export default app;