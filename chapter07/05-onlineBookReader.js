class Book {
  constructor(name, file) {
    this.name = name;
    this.file = file;
  }
}

class BookReader {
  constructor() {
    this.currentBook = null;
    this.books = {};
  }

  add(book) {
    this.books[book.name] = book;
  }

  find(bookname) {
    return this.books[book.bookname];
  }

  open(bookname) {
    this.currentBook = this.books[book.bookname];
    return this.currentBook.file;
  }
}
