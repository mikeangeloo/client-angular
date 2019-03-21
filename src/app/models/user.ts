export class User {
  constructor(
    public id: number,
    public role: string,
    public name: string,
    public surname: string,
    public password: string,
    public email: string
  ) {}
}
