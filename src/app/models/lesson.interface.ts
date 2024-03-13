import { Course } from './course.interface';
import { Resources } from './resources.interface';

export interface Lesson {
  lessonId: number;
  title: string;
  content: string;
  course: Course;
  resources: Resources[];
}
