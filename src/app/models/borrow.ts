import mongoose from "mongoose";
import IBorrow from "../Interfaces/borrow";

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