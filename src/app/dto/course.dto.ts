import { CategoryDTO } from './category.dto';
import { SubcategoryDTO } from './subcategory.dto';
import { ResourcesDTO } from './resources.dto';
import { LessonDTO } from './lesson.dto';
import { UserDTO } from './user.dto';

export interface CourseDTO {
  imageUrl: any;
  title: string;
  subcategoryId: number;
  instructorId: number;
  description: string;
  startDate: Date;
  endDate: Date;
  courseId: number;
  resources: any[];
  lessons: any[];
  courseImage: File | undefined;
}
