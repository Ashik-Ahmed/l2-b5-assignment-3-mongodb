import express from 'express';
import { createBook, getAllBook, getBookById, updateBookById } from '../controllers/book.controller';


const router = express.Router();


router.route('/')
    .post(createBook)
    .get(getAllBook)


router.route('/:bookId')
    .get(getBookById)
    .patch(updateBookById)

export default router;