import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './modules/book/book-detail/book-detail.component';
import { BookListComponent } from './modules/book/book-list/book-list.component';
import { CreateBookComponent } from './modules/book/create-book/create-book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookRoutingModule } from './modules/book/book-routing.module';

const routes: Routes = [
    //{ path: '', component: },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BookRoutingModule,
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
