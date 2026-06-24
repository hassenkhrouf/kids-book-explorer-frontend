import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, switchMap, map, startWith, catchError, of } from 'rxjs';
import { BookService } from '../shared/services/book.service';
import { Book } from '../shared/models/book.model';
import { AddBookForm } from '../shared/add-book-form/add-book-form';

interface HomeState {
  loading: boolean;
  books: Book[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AddBookForm],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  private bookService = inject(BookService);
  private searchTerm$ = new BehaviorSubject<string>('');
  private reload$ = new BehaviorSubject(0);

  currentPage = 1;
  booksPerPage = 6;
  searchTerm = '';
  showForm = false;

  state$ = combineLatest([this.searchTerm$, this.reload$]).pipe(
    switchMap(([term]) => {
      const request = term.trim()
        ? this.bookService.searchBooks(term)
        : this.bookService.getAllBooks();

      return request.pipe(
        map(books => ({ loading: false, books } satisfies HomeState)),
        startWith({ loading: true, books: [] } satisfies HomeState),
        catchError(err => {
          console.error('Failed to load books:', err);
          return of({ loading: false, books: [] } satisfies HomeState);
        })
      );
    })
  );

  getPaginatedBooks(books: Book[]): Book[] {
    const startIndex = (this.currentPage - 1) * this.booksPerPage;
    return books.slice(startIndex, startIndex + this.booksPerPage);
  }

  getTotalPages(books: Book[]): number {
    return Math.ceil(books.length / this.booksPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goNext(totalPages: number) {
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  goPrev() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onSearch() {
    this.currentPage = 1;
    this.searchTerm$.next(this.searchTerm);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onBookAdded() {
    this.showForm = false;
    this.reload$.next(this.reload$.value + 1);
  }
}
