import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseDTO } from 'src/app/dto/course.dto';
import { CourseService } from 'src/app/services/course.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css']
})
export class StudentNavComponent {
  searchTerm: string | undefined;
  searchResults: CourseDTO[] | undefined = [];
  isSearchModalOpen = false;

  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
    private courseService: CourseService
  ) {}

  searchCourses() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.toastr.error('Please enter a search term', 'Error');
      return;
    }

    this.courseService.searchCourses(this.searchTerm).subscribe(
      (courses: CourseDTO[]) => {
        this.searchResults = courses;
        this.isSearchModalOpen = true;
      },
      (error) => {
        console.error('Error occurred while searching courses:', error);
        this.toastr.error('An error occurred while searching courses', 'Error');
      }
    );
  }

  closeModal() {
    this.isSearchModalOpen = false;
  }

  logout(): void {
    this.loginService.logout();
    this.toastr.info('You Are Logged out.', 'Success');
    this.router.navigate(['/login']);
  }
}
