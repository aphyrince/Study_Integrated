import mongoose, { Schema } from 'mongoose';

interface IBook {
    title: string;
    author?: string;
    rating: number;
    category: string;
    readAt?: Date;
}

// Schema 정의
const bookSchema = new Schema<IBook>(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        category: {
            type: String,
            required: true,
        },
        readAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    },
);

// Model 생성
const Book = mongoose.model<IBook>('Book', bookSchema);

export default Book;
