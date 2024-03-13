import { Category } from './category.interface';
import { Course } from './course.interface';

export interface Subcategory {
  id: number;
  name: string;
  category: Category;
  courses?: Course[];
}
