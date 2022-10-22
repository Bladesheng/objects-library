import { Book } from "./Book";

export const Library = (() => {
  const books: Book[] = [];

  function addBook(book: Book) {
    books.push(book);
  }

  function selectBook(selectedIndex: number) {
    return books[selectedIndex];
  }

  return {
    books,
    addBook,
    selectBook
  };
})();
