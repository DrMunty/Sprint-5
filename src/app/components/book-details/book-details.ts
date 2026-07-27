import { Component, inject, input, computed} from '@angular/core';
import { Router} from '@angular/router';
import { BookService } from '../../services/book-service';


@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails {
  private router = inject(Router)
  private bookService = inject(BookService)

  bookId= input.required<string>();
  book = computed(()=> {
    return this.bookService.myBooks().find(b => b.id === this.bookId());
  })

  returnToList(){
    this.router.navigate(['/books']);
  }
}
