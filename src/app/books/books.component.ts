import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  cart: Book[] = [];
  books: Book[] = [];

  isDisabled: boolean = false;

  myName: string = '';
  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  handleClick() {
    this.isDisabled = true;
  }

  //toggleBooks() {
  //this.isShowing = !this.isShowing;
  //}

  // handleInput(event: any) {
  //this.myName = event.target.value;
  // }

  addToCart(book: Book) {
    this.cart.push(book);
  }
}
