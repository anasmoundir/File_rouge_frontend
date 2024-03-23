import { Course } from './course.interface';
import { Lesson } from './lesson.interface';

export interface Resources {
url: any;
  title: string;
  description: string;
  courseId: number;
  lessonId: number;
  file: File;
}
