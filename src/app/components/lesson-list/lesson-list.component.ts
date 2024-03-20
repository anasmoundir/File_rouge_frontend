import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonDTO } from 'src/app/dto/lesson.dto';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent {
  courseId: number | undefined;
  lessons: LessonDTO[] | undefined;
  error: string | undefined;

  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['courseId']; 
      this.getLessonsByCourseId(this.courseId);
    });
  }

  getLessonsByCourseId(courseId: number): void {
    this.lessonService.getLessonsByCourseId(courseId)
      .subscribe(
        (data: LessonDTO[]) => {
          this.lessons = data;
        },
        error => {
          this.error = error;
        }
      );
  }
}
