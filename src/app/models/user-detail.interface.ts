import { User } from "./user.interface";

export interface UserDetail {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  user?: User;
}
