import express from 'express';
import { borrowBook, borrowedBookSummary } from '../controllers/borrow.controller';


const router = express.Router();

router.route('/')
    .post(borrowBook)
    .get(borrowedBookSummary)



export default router;