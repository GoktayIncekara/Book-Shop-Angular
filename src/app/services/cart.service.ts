import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];

  constructor() {}

  add(book: Book) {
    this.cart.push(book);
    console.log('Book added: ', book);
    console.log('New cart: ', this.cart);
  }

  remove(book: Book) {
    this.cart = this.cart.filter((b) => b != book);

    console.log('Book removed: ', book);
    console.log('New cart: ', this.cart);
  }

  get() {
    return this.cart;
  }
}
