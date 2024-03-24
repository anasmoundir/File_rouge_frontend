import { Component } from '@angular/core';
import { CourseDTO } from 'src/app/dto/course.dto';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.css']
})
export class ExploreCoursesComponent {
  courses: CourseDTO[] = [];
  showExploreMore: boolean = false;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe(
      (courses: CourseDTO[]) => {
        this.courses = courses;
        console.log('Courses:', this.courses);
        this.showExploreMore = this.courses.length > 10;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }


}
