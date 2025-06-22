import { Request, Response } from "express";
import { getBookByIdService } from "../services/book.service";
import IBook from "../Interfaces/book";
import { borrowBookService, borrowedBookSummaryService } from "../services/borrow.service";

export const borrowBook = async (req: Request, res: Response) => {
    try {
        const { book, quantity, dueDate } = req.body;

        const borrowedBook: IBook | null = await getBookByIdService(book);

        if (!borrowedBook) {
            res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        else if (borrowedBook.copies < quantity) {
            res.status(400).json({
                success: false,
                message: "Insufficient copies available"
            });
        }

        else {
            const borrowResult = await borrowBookService(book, quantity, dueDate);

            if (borrowResult?._id) {
                res.status(201).json({
                    success: true,
                    message: "Book borrowed successfully",
                    data: borrowResult
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    message: "Failed to borrow book",
                    error: "Borrowing operation failed"
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to borrow book",
            error: error
        });
    }
}


export const borrowedBookSummary = async (req: Request, res: Response) => {
    try {
        const summary = await borrowedBookSummaryService();

        if (summary.length > 0) {
            res.status(200).json({
                success: true,
                message: "Borrowed books summary retrieved successfully",
                data: summary
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No borrowed books found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve borrowed book report",
            error: error
        });
    }
};