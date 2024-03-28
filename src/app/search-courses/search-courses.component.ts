import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDTO } from '../dto/course.dto';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.css']
})
export class SearchCoursesComponent {
  searchResults: CourseDTO[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['searchTerm'];
      const searchResults = history.state.searchResults;

    });
  }
}
