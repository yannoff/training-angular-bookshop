import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    //{ path: '', component: },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'book/:id', component: BookDetailComponent},
    { path: 'books', component: BookListComponent},
    { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
