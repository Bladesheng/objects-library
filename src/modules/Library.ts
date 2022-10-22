import { Book } from "./Book";

//type IBook = typeof Book;

export const Library = (() => {
  const books: Book[] = [];

  function addBook(book: Book) {
    books.push(book);
  }

  return {
    books,
    addBook
  };
})();
