import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../shared/services/book.service';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {

  categoryList: string[] = ['Adventure', 'Fairy Tales', 'Education'];
  selectedCategory: string = '';

  // 1. DECLARE SERVICE FIRST
  private bookService = inject(BookService);

  // 2. USE SERVICE SECOND
  books$ = this.bookService.getAllBooks();

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.books$ = this.bookService.getBooksByCategory(category);
  }

  showAll() {
    this.selectedCategory = '';
    this.books$ = this.bookService.getAllBooks();
  }
}