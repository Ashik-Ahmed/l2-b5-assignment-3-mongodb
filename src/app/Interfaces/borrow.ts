import { ObjectId } from "mongoose";

interface IBorrow {
    book: ObjectId
    quantity: number; // Number of copies borrowed
    dueDate: Date; // Due date for returning the book
}

export default IBorrow;