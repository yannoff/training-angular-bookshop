import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
    declarations: [
        BookListComponent,
        BookDetailComponent,
        CreateBookComponent,
    ],
    imports: [
        BookRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    exports: [
        BookListComponent,
        BookDetailComponent,
        CreateBookComponent,
    ]
})

export class BookModule { }
