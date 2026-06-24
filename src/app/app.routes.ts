import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Categories } from './categories/categories';
import { Reader } from './reader/reader';
import { NotFound } from './shared/not-found/not-found'; // Added

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'categories', component: Categories },
  { path: 'reader/:id', component: Reader },
  { path: '**', component: NotFound } // Changed from redirectTo to component
];