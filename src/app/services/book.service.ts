import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';

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
}
