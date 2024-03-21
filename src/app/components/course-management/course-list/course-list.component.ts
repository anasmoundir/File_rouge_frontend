import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDTO } from 'src/app/dto/course.dto';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: CourseDTO[] = [];
  error: string | undefined;
  newCourse: CourseDTO = {
    title: '', subcategoryId: 0, instructorId: 0, description: '', startDate: new Date(), endDate: new Date(),
    courseId: 0,
    resources: [],
    lessons: []
  };

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCoursesOfTheCurrentTeacher();
  }

  getCoursesOfTheCurrentTeacher(): void {
    this.courseService.getCoursesOfTheCurrentTeacher()
      .subscribe(
        courses => {
          this.courses = courses;
        },
        error => {
          this.error = error;
        }
      );
  }

  createCourse(): void {
    this.courseService.createCourse(this.newCourse)
      .subscribe(
        createdCourse => {
          this.courses.push(createdCourse);
          this.newCourse = { title: '', subcategoryId: 0, instructorId: 0, description: '', startDate: new Date(), endDate: new Date(), courseId: 0, resources: [], lessons: []};
        },
        error => {
          this.error = error;
        }
      );
  }

  editCourse(course: CourseDTO): void {
    this.courseService.updateCourse(course.courseId, course)
      .subscribe(
        updatedCourse => {
          const index = this.courses.findIndex(c => c.courseId === updatedCourse.courseId);
          this.courses[index] = updatedCourse;
        },
        error => {
          this.error = error;
        }
      );
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId)
      .subscribe(
        () => {
          this.courses = this.courses.filter(c => c.courseId !== courseId);
        },
        error => {
          this.error = error;
        }
      );
  }
}
