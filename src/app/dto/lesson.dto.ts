import { CourseDTO } from "./course.dto";
import { ResourcesDTO } from "./resources.dto";

export interface LessonDTO {
  lessonId: number;
  title: string;
  content: string;
  course: CourseDTO;
  resources: ResourcesDTO[];
}
