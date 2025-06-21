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
    return book;
}

export const updateBookByIdService = async (id: string, bookInfo: IBook) => {
    // const updatedBook = await Book.findByIdAndUpdate(id, bookInfo, { new: true, runValidators: true });
    const updatedBook = await Book.updateOne({ _id: id }, bookInfo, { new: true, runValidators: true });
    return updatedBook;
}

export const deleteBookByIdService = async (bookId: string) => {
    // const deletedBook = await Book.findByIdAndDelete(bookId);
    const deletedBook = await Book.deleteOne({ _id: bookId });
    return deletedBook;
}