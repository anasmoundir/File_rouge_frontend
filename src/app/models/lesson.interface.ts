import { CourseDTO } from '../dto/course.dto';
import { Course } from './course.interface';
import { Resources } from './resources.interface';

export interface Lesson {
  lessonId: number;
  title: string;
  content: string;
  course: CourseDTO;

  resources: Resources[];
}
