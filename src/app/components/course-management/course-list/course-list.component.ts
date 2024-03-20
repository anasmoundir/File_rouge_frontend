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
  courses: CourseDTO[] | undefined;
  error: string | undefined;

  constructor(private courseService: CourseService, private router: Router) { }

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

    consultLessons(courseId: number): void {
      this.router.navigate(['teacher/lessons']);
    }
}
