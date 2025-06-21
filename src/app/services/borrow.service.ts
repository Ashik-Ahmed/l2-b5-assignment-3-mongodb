import Borrow from "../models/borrow"

export const borrowBookService = async (bookId: string, quantity: number, dueDate: Date) => {
    const borrowResult = await Borrow.create({
        book: bookId,
        quantity: quantity,
        dueDate: dueDate
    });
    return borrowResult;
}

export const borrowedBookSummaryService = async () => {
    const borrowedBookSummary = await Borrow.aggregate([
        {
            $group: {
                _id: "$book",
                totalQuantity: { $sum: "$quantity" }
            }
        },
        {
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "book"
            }
        },
        { $unwind: "$book" },
        {
            $project: {
                _id: 0,
                book: {
                    title: "$book.title",
                    isbn: "$book.isbn"
                },
                totalQuantity: 1
            }
        }
    ]);
    return borrowedBookSummary;
}