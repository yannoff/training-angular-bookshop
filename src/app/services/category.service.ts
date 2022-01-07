import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {

    categories:string[] = [ "Novels", "IT Books" ];

    constructor() { }

    getAll():string[] {
        return this.categories;
    }

    get(id: any):string {
        return this.categories[id];
    }
}
