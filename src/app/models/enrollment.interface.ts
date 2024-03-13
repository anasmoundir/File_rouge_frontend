import { User } from './user.interface';
import { Course } from './course.interface';

export interface Enrollment {
  id: number;
  user: User;
  course: Course;
  enrollmentDate: string; 
}
