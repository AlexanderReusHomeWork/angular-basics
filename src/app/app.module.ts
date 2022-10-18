import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { BookItemComponent } from './components/book-item/book-item.component';

import { FirstLetterUppercasePipe } from './pipes/firstLetterUppercase.pipe';
import { EurToLeiPipe } from './pipes/eurToLei.pipe';
import { changeScaleDirective } from './directives/scale.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksContainerComponent,
    BookItemComponent,
    FirstLetterUppercasePipe,
    EurToLeiPipe,
    changeScaleDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
