import IBook from "../Interfaces/book";
import Book from "../models/book";

export const createBookService = async (book: IBook) => {
    const result = await Book.create(book);
    return result;
}

export const getAllBookService = async (filter: Object, sortBy: string, sort: string, limit: number) => {

    const books = await Book.find(filter).sort({ [sortBy]: sort === "asc" ? 1 : -1 }).limit(limit);
    return books;
}

export const getBookByIdService = async (id: string) => {
    const book = await Book.findById(id);
    console.log(`Book found: ${book}`);
    return book;
}