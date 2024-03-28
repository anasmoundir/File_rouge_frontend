import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';
import { TeacherRegistrationDTO } from 'src/app/models/TeacherRegistrationDTO';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent {
  teacherRegistration: TeacherRegistrationDTO = {
    user: {
      username: '',
      email: '',
      password: ''
    },
    teacher: {
      approved: false,
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
    }
  };

  constructor(
    private registrationService: RegistrationService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  submitRegistration() {
    console.log('Form submitted');
    console.log('Teacher Registration Data:', this.teacherRegistration);

    this.registrationService.registerTeacher(this.teacherRegistration)
      .subscribe(
        response => {
          response.error('Error registering user:', response);
          this.toastr.error('Registration failed: ' + response.message);
        },
        error => {
          console.log('Registration response:', error);
          if (error.status === 201) {
            console.log('User registered successfully');
            this.toastr.success('Registration successful');
            this.router.navigate(['/login']);
          } else {
            console.error('Unexpected response:', error);
            this.toastr.error('Unexpected response from the server');
          }
        }
      );
  }

  resetForm() {
    this.teacherRegistration = {
      user: {
        username: '',
        email: '',
        password: ''
      },
      teacher: {
        approved: false,
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
      }
    };
  }
}
