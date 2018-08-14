export class User {
  id: string;
  name: string;
  age: number;
  gender: string;
  department: string;
  address: {
    city: string,
    street: string
  }
}