import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from 'src/app/dto/course.dto';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  constructor(private courseService: CourseService) {}
  courses$: Observable<CourseDTO[]> | undefined;
  ngOnInit(): void {
    this.courses$ = this.courseService.getAllCourses();
  }
}
