import { Service } from '@angular/core';
import type { Book } from '../models/book-interface';
import { signal } from '@angular/core';

@Service()
export class BookService {
    myBooks = signal<Book[]>([
        {
            id: '1',
            title: 'IT',
            author: 'Stephen King',
            category: 'Terror'
        },
        {
            id: '2',
            title: 'La Puerta Oscura',
            author: 'David Lozano',
            category: 'Ficció'
        },
        {
            id: '3',
            title: 'Blood Meridian',
            author: 'Cormac McCarthy',
            category: 'Novel·la Western'
        },
    ])
}
