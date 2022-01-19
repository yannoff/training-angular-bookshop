import { Component, AfterContentInit, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Book } from '../models/book'
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {

  title:string = "The book list";

  // Category filter possible values
  categories!: Promise<string[]|undefined>;

  // The filtered book collection
  books!: Promise<Book[]|undefined>;

  // Default category filter
  category:string = 'ALL';

  constructor(private bookService: BookService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    console.log('onInit');
    this.books = this.bookService.getAllAsync();
    this.categories = this.categoryService.getAllAsync();
    
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
      if (this.category != 'ALL') {
          this.books = this.bookService.getAllByCategoryAsync(this.category);
      } else {
          this.books = this.bookService.getAllAsync();
      }
  }

}
