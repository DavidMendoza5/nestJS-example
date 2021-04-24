export class Course {
  readonly id: string;
  readonly coursename: string;
  readonly userId: string;

  constructor(id: string, coursename: string, userId: string) {
    this.id = id;
    this.coursename = coursename;
    this.userId = userId;
  }
}