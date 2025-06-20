import { create } from "domain";
import { Request, Response } from "express";
import { createBookService } from "../services/book.service";

export const createBook = async (req: Request, res: Response) => {
    try {
        const book = req.body;

        const newBook = await createBookService(book);

        if (newBook?._id) {
            res.status(201).json({
                success: true,
                message: "Book created successfully",
                book: newBook
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: "Failed to create book",
                error: "Book creation failed"
            });
        }

    } catch (error: any) {
        // console.error("Error creating book:", error);
        res.status(500).json({
            success: false,
            message: "Validation failed",
            error: error
        });
    }
}