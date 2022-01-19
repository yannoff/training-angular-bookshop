import { Book } from './book';

export interface DbSchema {
    books: Book[];
    categories: string[];
}

