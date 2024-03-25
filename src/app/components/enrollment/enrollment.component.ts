import { Component } from '@angular/core';
import { CourseDTO } from 'src/app/dto/course.dto';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {
  enrolledCourses: CourseDTO[] = [];

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.getEnrolledCourses();
  }

  getEnrolledCourses(): void {
    this.enrollmentService.getEnrolledCourses()
      .subscribe(
        (courses: CourseDTO[]) => {
          this.enrolledCourses = courses;
        },
        (error) => {
          console.error('Error fetching enrolled courses:', error);
        }
      );
  }
}
