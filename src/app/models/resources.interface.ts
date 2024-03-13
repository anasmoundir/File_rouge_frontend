import { Course } from './course.interface';
import { Lesson } from './lesson.interface';

export interface Resources {
  resourceId: number;
  title: string;
  description: string;
  url: string;
  course?: Course;
  lesson?: Lesson;
}
