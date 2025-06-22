# Library Management API

This API provides endpoints to manage a library system, including books and borrowing functionality. It is built with Node.js, Express, TypeScript, and MongoDB.


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd l2-b5-assignment-3-mongodb
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/librarydb
     ```
     Adjust the `MONGODB_URI` as needed for your MongoDB setup.

4. **Run the server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The server will start on the port specified in your `.env` file (default is 5000).

5. **Test the API:**
   - Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the endpoints listed above.

---


## Features

- **Books**
  - Add new books to the library
  - Retrieve all books with filtering, sorting, and pagination
  - Get details of a specific book by ID
  - Update book information (including copies and availability)
  - Delete a book

- **Borrowing**
  - Borrow a book (decreases available copies)
  - Automatically updates book availability when copies reach zero
  - Get a summary of borrowed books with total quantities

## Endpoints

### Books

- `GET /api/books`  
  List all books (supports filtering by genre, sorting, and limiting results).

- `GET /api/books/:id`  
  Get details of a specific book.

- `POST /api/books`  
  Add a new book.

- `PATCH /api/books/:id`  
  Update an existing book.

- `DELETE /api/books/:id`  
  Remove a book from the library.

### Borrow

- `POST /api/borrow`  
  Borrow a book by providing book ID, quantity, and due date.

- `GET /api/borrow/summary`  
  Get a summary of all borrowed books, including book title, ISBN, and total quantity borrowed.

## Notes

- Book availability is automatically managed based on the number of copies.
- All endpoints return JSON responses.
- Proper validation and error handling are implemented.

---