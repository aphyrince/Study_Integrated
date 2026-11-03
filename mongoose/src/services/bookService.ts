import Book from '../models/Book.js';

// create 데이터 생성

// const book = new Book({
//     title: 'Clean Code',
//     author: 'Robert C. Martin',
//     rating: 5,
//     category: 'programming',
// });

// await book.save();

// 방법 2

const book = await Book.create({
    title: 'Clean Code',
    author: 'Robert C. Martin',
    rating: 5,
    category: 'programming',
});

// Read 조회

const books = await Book.find();

const id = '2312';

const book1 = await Book.findById(id);

// 조건으로 조회
const books2 = await Book.find({
    category: 'programming',
});

// 하나만 조회
const book2 = await Book.findOne({
    title: 'Clean Code',
});

// 정렬, 개수제한, 특정 필드 선택도 가능.
const books3 = await Book.find().sort({ createdAt: -1 }).limit(10).select('title author rating');

// Update - 데이터 수정

await Book.findByIdAndUpdate(id, { rating: 4 }, { new: true, runValidators: true });

// 또는 Document를 가져와서 직접 수정할 수도 있음.

const book4 = await Book.findById(id);

if (book4) {
    book4.rating = 4;
    await book4.save();
}

// Delete - 데이터 삭제

await Book.findByIdAndDelete(id);

// 조건으로 삭제
await Book.deleteMany({
    category: 'programming',
});
