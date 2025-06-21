import mongoose from "mongoose";
import IBorrow from "../Interfaces/borrow";
import Book from "./book";

const borrowSchema = new mongoose.Schema<IBorrow>({
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: [true, "Book is required"] },
    quantity: { type: Number, required: [true, "Quantity is required"], min: 1 },
    dueDate: { type: Date, required: [true, "Due date is required"] }
},
    {
        timestamps: true,
        versionKey: false
    }
);

borrowSchema.post("save", async function (doc) {
    // "doc" is the saved Borrow document
    const bookId = doc.book;
    const borrowedQty = doc.quantity;

    // Decrement the book's copies
    const book = await Book.findById(bookId);
    if (book) {
        book.copies -= borrowedQty;
        // If copies become 0, set available to false
        if (book.copies <= 0) {
            book.copies = 0;
            book.available = false;
        }
        await book.save();
    }
});

const Borrow = mongoose.model<IBorrow>("Borrow", borrowSchema);
export default Borrow;