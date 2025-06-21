import IBook from "../Interfaces/book";
import Book from "../models/book"
import Borrow from "../models/borrow"

export const borrowBookService = async (bookId: string, quantity: number, dueDate: Date) => {
    const borrowResult = await Borrow.create({
        book: bookId,
        quantity: quantity,
        dueDate: dueDate
    });
    return borrowResult;
}