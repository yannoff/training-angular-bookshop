import { Book } from 'src/app/models/book';

export interface DbSchema {
    books: Book[];
    categories: string[];
}

