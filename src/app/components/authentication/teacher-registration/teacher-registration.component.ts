import { Component } from '@angular/core';

import { TeacherRegistrationDTO } from 'src/app/models/TeacherRegistrationDTO';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent {
  teacherRegistration: TeacherRegistrationDTO = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    educationalQualifications: '',
    teachingExperience: '',
    professionalExperience: '',
    teachingPhilosophy: '',
    references: '',
    sampleLessonPlans: '',
    availability: ''
  };
  justificationPaper: File | null = null;

  constructor(private registrationService: RegistrationService) {}

  onFileSelected(event: any) {
    this.justificationPaper = event.target.files[0];
  }

  submitRegistration() {

    console.log('Form submitted');
    console.log('Teacher Registration Data:', this.teacherRegistration);
    console.log('Justification Paper:', this.justificationPaper);
    

    this.registrationService.registerTeacher(this.teacherRegistration)
      .subscribe(
        (response: any) => {
            console.log('Registration successful:', response);
          this.resetForm();
        },
        (error: any) => {

          console.error('Registration failed:', error);
        }
      );
  }

  resetForm() {
    this.teacherRegistration = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      educationalQualifications: '',
      teachingExperience: '',
      professionalExperience: '',
      teachingPhilosophy: '',
      references: '',
      sampleLessonPlans: '',
      availability: ''
    };
    this.justificationPaper = null;
  }
}
