import { HttpHeaders } from '@angular/common/http';
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
  showModal: boolean = false;
  uploadingImage: boolean = false;
  courses: CourseDTO[] = [];
  error: string | undefined;
  newCourse: CourseDTO = {
    imageUrl: undefined,
    title: '',
    subcategoryId: 0,
    instructorId: 0,
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    courseId: 0,
    resources: [],
    lessons: [],
    courseImage: undefined
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
    console.log('newCourse.startDate:', this.newCourse.startDate);
    console.log('newCourse.endDate:', this.newCourse.endDate);

    if (!(this.newCourse.startDate instanceof Date)) {
      console.error('newCourse.startDate is not a valid Date object');
      return;
    }
    if (!(this.newCourse.endDate instanceof Date)) {
      console.error('newCourse.endDate is not a valid Date object');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.newCourse.title);
    formData.append('subcategoryId', this.newCourse.subcategoryId.toString());
    formData.append('instructorId', this.newCourse.instructorId.toString());
    formData.append('description', this.newCourse.description);
    formData.append('startDate', this.newCourse.startDate.toISOString());
    formData.append('endDate', this.newCourse.endDate.toISOString());
    formData.append('courseImage', this.newCourse.courseImage as File);

    const headers = new HttpHeaders();

    this.courseService.createCourse(formData)
      .subscribe(
        createdCourse => {
          this.courses.push(createdCourse);
          this.newCourse = {
            imageUrl: undefined,
            title: '',
            subcategoryId: 0,
            instructorId: 0,
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            courseId: 0,
            resources: [],
            lessons: [],
            courseImage: undefined
          };
        },
        error => {
          this.error = error;
        }
      );
  }

  onImageSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newCourse.courseImage = file;
      this.uploadingImage = true;
      setTimeout(() => {
        this.uploadingImage = false;
      }, 2000);
    }
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
  toggleModal(): void {
    this.showModal = !this.showModal;
  }

}
