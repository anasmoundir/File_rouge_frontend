export interface TeacherRegistrationDTO {
  user: {
    username: string;
    password: string;
    email: string;
  };
  teacher: {
    approved: boolean;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    educationalQualifications: string;
    teachingExperience: string;
    professionalExperience: string;
    teachingPhilosophy: string;
    references: string;
    sampleLessonPlans: string;
    availability: string;
  };
}
