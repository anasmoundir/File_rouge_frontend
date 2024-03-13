import { User } from './user.interface';
import { Category } from './category.interface';
import { Subcategory } from './subcategory.interface';
import { Resources } from './resources.interface';
import { Lesson } from './lesson.interface';

export interface Course {
  courseId: number;
  title: string;
  instructor: User;
  description: string;
  startDate: string; // Consider using Date type if applicable
  endDate: string;   // Consider using Date type if applicable
  category: Category;
  subcategory: Subcategory;
  resources: Resources[];
  lessons: Lesson[];
  imageUrl: string;
}
