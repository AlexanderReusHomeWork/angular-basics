import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book.model';
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input()
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

  @Input()
  public isDisplayed: boolean = false;

  @Output() removeModalEvent = new EventEmitter<boolean>();

  sendEvent() {
    this.removeModalEvent.emit(this.isDisplayed);
  }

  removeModal() {
    this.isDisplayed = false;
    this.sendEvent();
  }
}
