import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg',
        review: 'I really like it.',
        price: 60,
      },
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg',
        review: 'It was amazing.',
        price: 40,
      },
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg',
        review: 'It was amazing.',
        price: 40,
      },
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg',
        review: 'It was amazing.',
        price: 40,
      },
    ];
  }
}
