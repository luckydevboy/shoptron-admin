export interface User {
  email: string;
  name: string;
  role: "admin" | "user";
  _id: string;
}
