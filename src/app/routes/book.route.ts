import express from 'express';
import { createBook, deleteBookById, getAllBook, getBookById, updateBookById } from '../controllers/book.controller';


const router = express.Router();


router.route('/')
    .post(createBook)
    .get(getAllBook)


router.route('/:bookId')
    .get(getBookById)
    .patch(updateBookById)
    .delete(deleteBookById)

export default router;