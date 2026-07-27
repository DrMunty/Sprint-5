import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  bookService = inject(BookService);
}
