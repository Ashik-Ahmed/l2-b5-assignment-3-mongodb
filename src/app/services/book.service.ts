import IBook from "../Interfaces/book";
import Book from "../models/book";

export const createBookService = async (book: IBook) => {
    const result = await Book.create(book);
    return result;
}