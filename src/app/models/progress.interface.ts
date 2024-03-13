import { User } from './user.interface';
import { Lesson } from './lesson.interface';

export interface Progress {
  id: number;
  user: User;
  lesson: Lesson;
  startTime: string;
  endTime: string;  
  completed: boolean;
  score: number;
}
