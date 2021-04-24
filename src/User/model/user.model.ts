export class User {
  readonly id: string;
  readonly name: string;
  readonly username: string;

  constructor(id: string, name: string, username: string) {
    this.id = id;
    this.name = name;
    this.username = username;
  }
}
