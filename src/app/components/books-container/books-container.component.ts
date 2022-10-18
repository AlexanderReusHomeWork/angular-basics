import { Component, Output, EventEmitter } from '@angular/core';
import BooksJson from '../../../assets/books.json';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
})
export class BooksContainerComponent {
  public booksArr: Book[] = BooksJson;

  public bookItem: Book = {
    ISBN: 0,
    title: '',
    author: '',
    summary: '',
    image: '',
    price: {
      currency: '',
      value: 0,
      displayValue: '',
    },
  };
  public isDisplayed: boolean = false;

  @Output() bookItemEvent = new EventEmitter<Book>();
  @Output() isDisplayedEvent = new EventEmitter<boolean>();

  public getBookInfo(item: Book) {
    this.bookItem = item;
    this.isDisplayed = true;
    this.sendEvents();
  }

  sendEvents() {
    this.bookItemEvent.emit(this.bookItem);
    this.isDisplayedEvent.emit(this.isDisplayed);
  }
}
