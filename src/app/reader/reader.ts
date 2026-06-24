import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../shared/services/book.service';
import {
  BehaviorSubject,
  combineLatest,
  map,
  switchMap,
  tap
} from 'rxjs';
import { Book } from '../shared/models/book.model';

interface ReaderVm {
  book: Book;
  pages: string[];
  pageIndex: number;
  totalPages: number;
  currentPageText: string;
}

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reader.html',
  styleUrl: './reader.scss'
})
export class Reader {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);
  private pageIndex$ = new BehaviorSubject(0);

  private book$ = this.route.params.pipe(
    map(params => Number(params['id'])),
    switchMap(id => this.bookService.getBookById(id)),
    tap(() => this.pageIndex$.next(0))
  );

  readerVm$ = combineLatest([this.book$, this.pageIndex$]).pipe(
    map(([book, pageIndex]) => {
      const pages = this.createPages(book.content);
      const safePageIndex = Math.min(pageIndex, pages.length - 1);

      return {
        book,
        pages,
        pageIndex: safePageIndex,
        totalPages: pages.length,
        currentPageText: pages[safePageIndex]
      } satisfies ReaderVm;
    })
  );

  goNext(totalPages: number): void {
    const current = this.pageIndex$.value;
    if (current < totalPages - 1) {
      this.pageIndex$.next(current + 1);
    }
  }

  goPrev(): void {
    const current = this.pageIndex$.value;
    if (current > 0) {
      this.pageIndex$.next(current - 1);
    }
  }

  jumpToPage(index: number): void {
    this.pageIndex$.next(index);
  }

  private createPages(content: string): string[] {
    const cleanContent = content
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    if (!cleanContent) {
      return ['No story content available yet.'];
    }

    const paragraphs = cleanContent
      .split(/\n\s*\n/)
      .map(paragraph => paragraph.trim())
      .filter(Boolean);

    const pages: string[] = [];
    const maxCharsPerPage = 420;
    let currentPage = '';

    for (const paragraph of paragraphs) {
      const candidate = currentPage
        ? `${currentPage}\n\n${paragraph}`
        : paragraph;

      if (candidate.length <= maxCharsPerPage) {
        currentPage = candidate;
      } else {
        if (currentPage) {
          pages.push(currentPage);
        }
        currentPage = paragraph;
      }
    }

    if (currentPage) {
      pages.push(currentPage);
    }

    return pages.length > 0 ? pages : [cleanContent];
  }
}