import { UserRole } from './user-role.interface';

export interface UserDTO {
  userId: number;
  username: string;
  email: string;
  userRole: UserRole;
}
