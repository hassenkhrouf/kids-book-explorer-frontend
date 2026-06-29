# Kids Book Explorer (Frontend)
<<<<<<< HEAD
=======

An interactive Angular frontend for the **Kids Book Explorer** full-stack application.  
It allows users to browse books, filter by category, search by keyword, read stories in a paginated reader view, and add new books through a form.

## Project Overview

This frontend is built with modern Angular standalone components and communicates with a Spring Boot backend API through a local proxy.

Core pages:
- `Home`: list books, search, pagination, add-book form
- `Categories`: browse books by predefined categories
- `Reader`: read a selected book with next/previous page navigation
- `Not Found`: fallback route for invalid URLs

## Tech Stack

- Angular `21`
- TypeScript
- RxJS
- Angular Forms (`FormsModule`, `ReactiveFormsModule`)
- Vitest (unit testing)

## Application Routes

- `/` - Home page
- `/categories` - Category-based book browsing
- `/reader/:id` - Reader view for a selected book
- `**` - Not found page

## API Integration

The app uses `BookService` to call backend endpoints under:

- `GET /api/books`
- `GET /api/books/:id`
- `GET /api/books/search?keyword=...`
- `GET /api/books/category/:category`
- `POST /api/books`

During development, API calls are proxied using `proxy.conf.json`:

- `/api` -> `http://localhost:8080`

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm `10+`
- Running backend API on `http://localhost:8080`

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

Then open:

- [http://localhost:4200](http://localhost:4200)

## Available Scripts

- `npm start` - start Angular dev server with backend proxy
- `npm run build` - build production artifacts
- `npm run watch` - build in watch mode (development)
- `npm test` - run unit tests (Vitest)

## Project Structure

```text
src/
  app/
    home/
    categories/
    reader/
    shared/
      add-book-form/
      not-found/
      models/
      services/
```

## Build for Production

```bash
npm run build
```

Build output is generated in the `dist/` directory.

## Testing

```bash
npm test
```

## Full-Stack Context

This repository is the frontend part of the **Kids Book Explorer** full-stack project.  
It is designed to work with a Spring Boot backend that provides book data and persistence.

## License

This project is for educational and portfolio purposes.  
Add a license file (for example, `MIT`) if you plan to distribute it publicly.
=======
# KidsBookExplorer
>>>>>>> 92f7e8f7c9944572336bd6f3a48c8f7f69b57996

An interactive Angular frontend for the **Kids Book Explorer** full-stack application.  
It allows users to browse books, filter by category, search by keyword, read stories in a paginated reader view, and add new books through a form.

## Project Overview

This frontend is built with modern Angular standalone components and communicates with a Spring Boot backend API through a local proxy.

Core pages:
- `Home`: list books, search, pagination, add-book form
- `Categories`: browse books by predefined categories
- `Reader`: read a selected book with next/previous page navigation
- `Not Found`: fallback route for invalid URLs

## Tech Stack

- Angular `21`
- TypeScript
- RxJS
- Angular Forms (`FormsModule`, `ReactiveFormsModule`)
- Vitest (unit testing)

## Application Routes

- `/` - Home page
- `/categories` - Category-based book browsing
- `/reader/:id` - Reader view for a selected book
- `**` - Not found page

## API Integration

The app uses `BookService` to call backend endpoints under:

- `GET /api/books`
- `GET /api/books/:id`
- `GET /api/books/search?keyword=...`
- `GET /api/books/category/:category`
- `POST /api/books`

During development, API calls are proxied using `proxy.conf.json`:

- `/api` -> `http://localhost:8080`

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm `10+`
- Running backend API on `http://localhost:8080`

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

Then open:

- [http://localhost:4200](http://localhost:4200)

## Available Scripts

- `npm start` - start Angular dev server with backend proxy
- `npm run build` - build production artifacts
- `npm run watch` - build in watch mode (development)
- `npm test` - run unit tests (Vitest)

## Project Structure

```text
src/
  app/
    home/
    categories/
    reader/
    shared/
      add-book-form/
      not-found/
      models/
      services/
```

## Build for Production

```bash
npm run build
```

Build output is generated in the `dist/` directory.

## Testing

```bash
npm test
```

## Full-Stack Context

This repository is the frontend part of the **Kids Book Explorer** full-stack project.  
It is designed to work with a Spring Boot backend that provides book data and persistence.

## License

<<<<<<< HEAD
This project is for educational and portfolio purposes.  
Add a license file (for example, `MIT`) if you plan to distribute it publicly.
=======
```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
>>>>>>> 92f7e8f7c9944572336bd6f3a48c8f7f69b57996
