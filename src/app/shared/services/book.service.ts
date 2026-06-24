import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private apiUrl = '/api/books';

    private http = inject(HttpClient);

    getAllBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
    }

    getBookById(id: number): Observable<Book> {
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
    }

    searchBooks(keyword: string): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.apiUrl}/search?keyword=${keyword}`);
    }

    getBooksByCategory(category: string): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.apiUrl}/category/${category}`);
    }

    saveBook(book: Book): Observable<Book> {
        return this.http.post<Book>(this.apiUrl, book);
    }
}