import { Book } from "./Book";

export const Library = (() => {
  const books: Book[] = [];

  function addBook(book: Book) {
    books.push(book);
  }

  function selectBook(bookIndex: number) {
    return books[bookIndex];
  }

  function removeBook(bookIndex: number) {
    books.splice(bookIndex, 1);
  }

  function reset() {
    books.length = 0;
  }

  return {
    books,
    addBook,
    selectBook,
    removeBook,
    reset
  };
})();
