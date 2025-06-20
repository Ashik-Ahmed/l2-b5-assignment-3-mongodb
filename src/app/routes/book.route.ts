import express from 'express';
import { createBook } from '../controllers/book.controller';


const router = express.Router();


router.route('/')
    .post(createBook);

export default router;