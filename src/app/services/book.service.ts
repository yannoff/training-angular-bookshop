import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
        providedIn: 'root'
})

export class BookService {

    // Referential containing all available books
    books:Book[] = [
        { id: 1, title: "Hacking techniques", author: "Jon Erickson", description: "Dive into the possibilities of any system", category: "IT Books", editor: "Pearson", price: "30 USD", ISBN: "978-2-7440-2264-7", rating: 5 },
        { id: 2, title: "Barney's Version", author: "Mordecai Richler", description: "One of the most entertaining ever written canadian story", category: "Novels", editor: "Gli Adelphi", price: "12 USD", ISBN: "978-88-459-1982-4", rating: 5 },
        { id: 3, title: "Weep no more, my lady", author: "Mary Higgins Clark", description: "", category: "Novels", editor: "Simon & Schuster Inc.", price: "15 USD", ISBN: "2-7242-7350-8" },
        { id: 4, title: "All around the town", author: "Mary Higgins Clark", description: "", category: "Novels", editor: "Simon & Schuster Inc.", price: "20 USD", ISBN: "2-253-07640-6" },
        { id: 5, title: "Portnoy's complaint", author: "Philip Roth", description: "", category: "Novels", editor: "", price: "20 USD", ISBN: "978-2-07-036470-1" },
        { id: 6, title: "The broom of the system", author: "John Foster Wallace", description: "", category: "Novels", editor: "", price: "14 USD", ISBN: "978-88-06-21197-4" },
        { id: 7, title: "A book on C", author: "Al Kelley / Ira Pohl", description: "Programming in C", category: "IT Books", editor: "Benjamin/Cummings", price: "22 USD", ISBN: "0-8053-0060-0", rating: 3.85 },
    ];

    constructor() { }

    getAll(): Book[] {
        return this.books;
    }

    get(id:any): Book {
        return this.books[id - 1];
    }
}
