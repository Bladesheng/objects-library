import { Library } from "./Library";
import { Book } from "./Book";

test("Library is empty without at start", () => {
  expect(Library.books).toEqual([]);
});

test("Add book to Library", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);

  Library.addBook(hobbit);

  expect(Library.books[0]).toEqual(hobbit);
});

test("Select book from Library", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);
  Library.addBook(hobbit);

  const selectedBook = Library.selectBook(0);

  expect(selectedBook).toEqual(hobbit);
});

test("Make sure read/unread book state is saved", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);
  Library.addBook(hobbit);
  const selectedBook = Library.selectBook(0);
  expect(selectedBook.read).toBe(true);

  selectedBook.toggleRead();
  expect(selectedBook.read).toBe(false);

  const selectedBookAgain = Library.selectBook(0);
  expect(selectedBookAgain.read).toBe(false);
});
