import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BookService } from '../../services/book-service';
import type { Book } from '../../models/book-interface';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router)
  private bookService = inject(BookService)
  bookId = this.activatedRoute.snapshot.params['bookId'];

  book: Book | undefined = this.bookService.myBooks().find(b => b.id === this.bookId)

  returnToList(){
    this.router.navigate(['/books']);
  }
}
