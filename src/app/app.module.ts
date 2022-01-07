import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { DeleteSpacePipe } from './pipes/delete-space.pipe';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MockDB } from './backend/mock-db';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    DeleteSpacePipe,
    StarsComponent,
    HomeComponent,
    NotFoundComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDB),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
