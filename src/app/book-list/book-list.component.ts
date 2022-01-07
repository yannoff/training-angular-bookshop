import { Component, AfterContentInit, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book'
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {

  title:string = "The book list";

  // Category filter possible values
  categories:string[] = [];

  // The filtered book collection
  books:Book[] = [];

  // Referential containing all available books
  all:Book[] = [];

  // Default category filter
  category:string = 'ALL';

  constructor(private bookService: BookService, private categoryService: CategoryService) {
  }

  load(): void {
      this.books = this.all;
  }

  ngOnInit(): void {
    console.log('onInit');
    this.all = this.bookService.getAll();
    this.categories = this.categoryService.getAll();
    this.load();
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  onNotify(event:number): void {
    console.log('Notify: ' + event);
  }

  filter() {
    console.log('Current category: ' + this.category);
    this.load();
    if (this.category != 'ALL') {
        this.books = this.books.filter(p => p.category == this.category);
    }
  }

}
