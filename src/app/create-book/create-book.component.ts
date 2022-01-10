import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
    selector: 'app-create-book',
    templateUrl: './create-book.component.html',
    styleUrls: ['./create-book.component.css']
})

export class CreateBookComponent implements OnInit {
    
    form: FormGroup;
    submitted: boolean = false;
    elements:any = {
        required: [
            'title',
            'author',
            'description',
            'category',
            'editor',
            'price',
            'ISBN',
        ],
        optional: [
            'rating',
        ],
    };

    constructor(private builder: FormBuilder, private bookService: BookService, private router: Router) {
        let group:any = {};
        for (let el of this.elements.required) {
            group[el] = ['', Validators.required];
        }
        for (let el of this.elements.optional) {
            group[el] = [];
        }
        this.form = this.builder.group(group);
    }

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
    }

    onSubmit(data:Book): void {
        console.log(data);
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        data.id = 100;
        let book:Book = data;
        this.bookService.save(book).then( (book:any) => this.router.navigate(['/books']) );
    }
}
