import express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send('Borrow Route');
    });

export default router;