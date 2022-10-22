import { Library } from "./Library";
import { Book } from "./Book";

export const Storage = (() => {
  let books: Book[];

  // save everything to local storage
  function _save() {
    localStorage.setItem("books", JSON.stringify(books));
  }

  // retrieve everything from local storage
  function init() {
    // empty by default
    books = [];

    const booksJSON = localStorage.getItem("books");
    // if there is something saved in localstorage
    if (booksJSON !== null) {
      const retrievedBooks: Book[] = JSON.parse(booksJSON);

      // reconstruct the books instead of using the default value (empty)
      // to keep the methods of books and Library
      for (const book of retrievedBooks) {
        const reconstructedBook = new Book(book.title, book.author, book.pages, book.read);
        Library.addBook(reconstructedBook);
      }

      books = Library.books;
    }
  }

  return {
    init,

    set books(booksArr: Book[]) {
      books = booksArr;
      _save();
    },
    get books() {
      return books;
    }
  };
})();
