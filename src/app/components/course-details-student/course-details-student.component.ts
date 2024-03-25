import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDTO } from 'src/app/dto/course.dto';
import { LessonDTO } from 'src/app/dto/lesson.dto';
import { ResourcesDTO } from 'src/app/dto/resources.dto';
import { CourseService } from 'src/app/services/course.service';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-course-details-student',
  templateUrl: './course-details-student.component.html',
  styleUrls: ['./course-details-student.component.css']
})
export class CourseDetailsStudentComponent implements OnInit {

  courseId: number | undefined;
  course: CourseDTO | undefined;
  lessons: LessonDTO[] = [];
  resources: ResourcesDTO[] = [];

  constructor(private route: ActivatedRoute, private courseService: CourseService, private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseIdParam = params.get('courseId');
      if (courseIdParam !== null) {
        this.courseId = +courseIdParam;
        this.loadCourseDetails();
      }
    });
  }

  loadCourseDetails(): void {
    if (this.courseId) {
      this.courseService.getCourseById(this.courseId).subscribe(course => {
        this.course = course;
        this.lessons = course.lessons || [];
        this.resources = course.resources || [];
      });
    }
  }

  enroll(): void {
    console.log('CourseId:', this.courseId); 
    if (this.courseId) {
      this.enrollmentService.enrollUser(this.courseId).subscribe(
        enrollment => {
          console.log('Enrollment successful:', enrollment);
        },
        error => {
          console.error('Enrollment failed:', error);
        }
      );
    }
  }
}
