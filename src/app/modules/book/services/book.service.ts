import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
        providedIn: 'root'
})

export class BookService {

    constructor(private client:HttpClient) { }

    getAllAsync(): Promise<Book[]|undefined> {
        return this.client.get<Book[]|undefined>('api/books').toPromise();
    }

    getAsync(id:any): Promise<Book|undefined> {
        return this.client.get<Book|undefined>('api/books/' + id).toPromise();
    }

    getAllByCategoryAsync(category:string): Promise<Book[]|undefined> {
        return this
            .client.get<Book[]|undefined>('api/books')
            .pipe(map( books => books && books.filter(b => b.category == category)) )
            .toPromise();
    }

    save(book:Book): any/*Promise<Book|undefined>*/ {
        let id:number = 0;
        return this.getAllAsync().then( books => {
            for (let book of books || []) {
                if (book.id > id) {
                    id = book.id;
                }
            }
            book.id = (id + 1);
            return this.client.post('/api/books', book).toPromise();
        });
    }
}
