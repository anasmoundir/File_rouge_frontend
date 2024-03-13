import { UserRole } from './user-role.interface';

export interface User {
  userId: number;
  username: string;
  email: string;
  userRole: UserRole;
}
