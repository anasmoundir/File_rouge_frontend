import { UserDTO } from './user.dto';

export interface TeacherDTO {
  id: number;
  approved: boolean;
  educationalQualifications: string;
  teachingExperience: string;
  professionalExperience: string;
  teachingPhilosophy: string;
  references: string;
  sampleLessonPlans: string;
  availability: string;
  user: UserDTO;
}
