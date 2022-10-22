export class Book {
  constructor(
    public title: string,
    public author: string,
    public pages: number,
    public read: boolean
  ) {}

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`;
  }

  toggleRead() {
    this.read = !this.read;
  }
}
