import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-book-form.html',
  styleUrl: './add-book-form.scss'
})
export class AddBookForm {

  @Output() bookAdded = new EventEmitter<void>();

  bookForm: FormGroup;
  isSubmitting = false;

  private fb = inject(FormBuilder);
  private bookService = inject(BookService);

  constructor() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      category: ['Adventure', Validators.required],
      imageUrl: [''],
      content: ['']
    });
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    // FINAL FIX: Calling saveBook and casting to 'any' to bypass strict TS checks
    this.bookService.saveBook(this.bookForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.bookForm.reset();
        this.bookAdded.emit();
      },
      error: (err: any) => {
        console.error("Error adding book", err);
        this.isSubmitting = false;
      }
    });
  }
}