import { Component, Input } from '@angular/core';
import { CourseDTO } from 'src/app/dto/course.dto';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.css']
})
export class SearchCoursesComponent {
  @Input() courses: CourseDTO[] | undefined;
  constructor() { }
}
