
interface IBook {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: number;
    cover: string;
    available: boolean;
    updateAvailability?: () => Promise<void>;
}

export default IBook;