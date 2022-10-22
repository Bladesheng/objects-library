import { Library } from "./Library";
import { Book } from "./Book";

beforeEach(() => {
  Library.reset();
});

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

test("Remove book", () => {
  const hobbit1 = new Book("The Hobbit 1", "Tolkien", 420, true);
  const hobbit2 = new Book("The Hobbit 2", "Tolkien", 420, true);
  const hobbit3 = new Book("The Hobbit 3", "Tolkien", 420, true);
  Library.addBook(hobbit1);
  Library.addBook(hobbit2);
  Library.addBook(hobbit3);

  Library.removeBook(1); // remove The Hobbit 2

  expect(Library.books.length).toBe(2);

  const selectedBook1 = Library.selectBook(0); // The Hobbit 1
  const selectedBook3 = Library.selectBook(1); // The Hobbit 3

  expect(selectedBook1).toEqual(hobbit1);
  expect(selectedBook3).toEqual(hobbit3);
});
