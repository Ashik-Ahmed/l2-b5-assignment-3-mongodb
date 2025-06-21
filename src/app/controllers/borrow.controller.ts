import { Request, Response } from "express";
import { getBookByIdService } from "../services/book.service";
import IBook from "../Interfaces/book";
import { borrowBookService } from "../services/borrow.service";

export const borrowBook = async (req: Request, res: Response) => {
    try {
        const { book, quantity, dueDate } = req.body;

        // Validate input
        // if (!bookId || !quantity || !dueDate) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Book ID, quantity, and due date are required"
        //     });
        // }

        const borrowedBook: IBook | null = await getBookByIdService(book);

        if (!borrowedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        else if (borrowedBook.copies < quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient copies available"
            });
        }

        else {
            const borrowResult = await borrowBookService(book, quantity, dueDate);

            if (borrowResult?._id) {
                return res.status(500).json({
                    success: true,
                    message: "Book borrowed successfully",
                    data: borrowResult
                });
            }
            return res.status(500).json({
                success: false,
                message: "Failed to borrow book",
                error: "Borrowing operation failed"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to borrow book",
            error: error
        });
    }
}