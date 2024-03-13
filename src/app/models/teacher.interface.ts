import { User } from './user.interface';

export interface Teacher {
  id: number;
  approved: boolean;
  educationalQualifications: string;
  teachingExperience: string;
  professionalExperience: string;
  teachingPhilosophy: string;
  references: string;
  sampleLessonPlans: string;
  availability: string;
  user: User;
}
