export class BinaryDate {
  private date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  static now() {
    return new BinaryDate(new Date());
  }
}
