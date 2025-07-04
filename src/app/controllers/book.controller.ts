import { create } from "domain";
import { Request, Response } from "express";
import { createBookService, deleteBookByIdService, getAllBookService, getBookByIdService, updateBookByIdService } from "../services/book.service";
import IBook from "../Interfaces/book";

export const createBook = async (req: Request, res: Response) => {
    try {
        const book = req.body;

        const newBook = await createBookService(book);

        if (newBook?._id) {
            res.status(201).json({
                success: true,
                message: "Book created successfully",
                data: newBook
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

export const getAllBook = async (req: Request, res: Response) => {
    try {

        const filter: Object = req.query.filter ? { genre: req.query.filter } : {};
        const sortBy: string = req.query.sortBy ? req.query.sortBy.toString() : "title";
        const sort: string = req.query.sort ? req.query.sort.toString() : "asc";
        const limit: number = req.query.limit ? parseInt(req.query.limit.toString()) : 10;

        const books = await getAllBookService(filter, sortBy, sort, limit);

        if (books.length > 0) {
            res.status(200).json({
                success: true,
                message: "Books retrieved successfully",
                data: books
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "No books found",
                data: []
            });
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve books",
            error: error.message
        });
    }
}

export const getBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;

        const book: any = await getBookByIdService(bookId);

        if (book._id) {
            res.status(200).json({
                success: true,
                message: "Book retrieved successfully",
                data: book
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Book not found",
                data: {}
            });
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve book",
            error: error
        });
    }
}


export const updateBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const updatedBookInfo = req.body;

        const updatedBook = await updateBookByIdService(bookId, updatedBookInfo);

        if (updatedBook?.modifiedCount > 0) {
            res.status(200).json({
                success: true,
                message: "Book updated successfully",
                data: updatedBook
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Book not found",
                error: "No book found with the provided ID"
            });
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to update book",
            error: error
        });
    }
}


export const deleteBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        console.log("Deleting book with ID:", bookId);
        const deletedBook = await deleteBookByIdService(bookId);

        if (deletedBook?.deletedCount > 0) {
            res.status(200).json({
                success: true,
                message: "Book deleted successfully",
                data: null
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Book not found",
                error: "No book found with the provided ID"
            });
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to delete book",
            error: error
        });
    }
}