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
