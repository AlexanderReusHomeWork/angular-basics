import { Component } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '13.1-angular-basics-homework';

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

  receiveBookItem($event: Book) {
    this.bookItem = $event;
  }
  receiveIsDisplayed($event: boolean) {
    this.isDisplayed = $event;
  }

  receiveModal($event: boolean) {
    this.isDisplayed = $event;
  }
}
