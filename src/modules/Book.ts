export class Book {
  constructor(
    public title: string,
    public author: string,
    public pages: number,
    public read: boolean,
    //public key: string = "k" + Date.now()
    public key: string
  ) {}

  toggleRead() {
    this.read = !this.read;
  }
}
