import mongoose from 'mongoose';
import IBook from '../Interfaces/book';

const bookSchema = new mongoose.Schema<IBook>({
    title: { type: String, required: [true, 'Title is required'] },
    author: { type: String, required: [true, 'Author is required'] },
    genre: { type: String, required: [true, 'Genre is required'], enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'] },
    isbn: { type: String, required: [true, 'ISBN is required'], unique: true },
    description: { type: String },
    copies: { type: Number, required: [true, 'Number of copies is required'], min: [0, "Copies must be a positive number"] },
    available: { type: Boolean, default: true }
},
    {
        timestamps: true,
        versionKey: false
    }
)

bookSchema.pre('updateOne', function (next) {
    const update: any = this.getUpdate();
    if (update && typeof update.copies !== 'undefined') {
        if (update.copies === 0) {
            update.available = false;
        } else if (update.copies > 0) {
            update.available = true;
        }
        this.setUpdate(update);
    }
    next();
});

const Book = mongoose.model<IBook>('Book', bookSchema);
export default Book;