import express from 'express';
import { borrowBook } from '../controllers/borrow.controller';


const router = express.Router();

router.route('/')
    .post(borrowBook)



export default router;