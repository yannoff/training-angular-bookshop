import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    constructor(private client: HttpClient) { }

    getAllAsync(): Promise<string[]|undefined> {
        return this.client.get<string[]|undefined>('api/categories').toPromise();
    }

    getAsync(id: any): Promise<string|undefined> {
        return this.client.get<string|undefined>('api/categories/' + id).toPromise();
    }
}
