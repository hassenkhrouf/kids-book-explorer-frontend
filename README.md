# Kids Book Explorer (Frontend)

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

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
