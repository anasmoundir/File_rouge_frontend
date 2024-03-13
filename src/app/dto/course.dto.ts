import { CategoryDTO } from './category.dto';
import { SubcategoryDTO } from './subcategory.dto';
import { ResourcesDTO } from './resources.dto';
import { LessonDTO } from './lesson.dto';
import { UserDTO } from './user.dto';

export interface CourseDTO {
  courseId: number;
  title: string;
  instructor: UserDTO;
  description: string;
  startDate: Date;
  endDate: Date;
  category: CategoryDTO;
  subcategory: SubcategoryDTO;
  resources: ResourcesDTO[];
  lessons: LessonDTO[];
}
