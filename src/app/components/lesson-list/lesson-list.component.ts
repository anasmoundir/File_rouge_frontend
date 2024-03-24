import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonDTO } from 'src/app/dto/lesson.dto';
import { Lesson } from 'src/app/models/lesson.interface';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent {
  courseId: number = 0;
  lessons: Lesson[] | undefined;
  error: string | undefined;
  newLesson: LessonDTO = {
    title: '', content: '', courseId: 0,
    lessonId: 0
  };

  constructor(router: Router  ,private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['courseId'];
      this.getLessonsByCourseId(this.courseId);
    });
  }

  getLessonsByCourseId(courseId: number): void {
    this.lessonService.getLessonsByCourseId(courseId)
      .subscribe(
        (data: Lesson[]) => {
          this.lessons = data;
        },
        error => {
          this.error = error;
        }
      );
  }

  createLesson(): void {
    this.newLesson.courseId = this.courseId;
    this.lessonService.createLesson(this.courseId, this.newLesson)
      .subscribe(
        (createdLesson: LessonDTO) => {

          const lesson: Lesson = {
            lessonId: createdLesson.lessonId,
            title: createdLesson.title,
            content: createdLesson.content,
            course: {
              courseId: this.courseId,
              title: '',
              subcategoryId: 0,
              instructorId: 0,
              description: '',
              startDate: new Date(),
              endDate: new Date(),
              resources: [],
              lessons: [],
              courseImage: undefined,
              imageUrl: undefined
            },
            resources: []
          };
          this.lessons?.push(lesson);
          this.newLesson = { title: '', content: '', courseId: this.courseId, lessonId: 0 };
        },
        error => {
          this.error = error;
        }
      );
  }

  // updateLesson(lesson: LessonDTO): void {
  //   this.lessonService.updateLesson(lesson.lessonId, lesson)
  //     .subscribe(
  //       (updatedLesson: LessonDTO) => {
  //         const updatedLessonObj: LessonDTO = {
  //           lessonId: updatedLesson.lessonId,
  //           title: updatedLesson.title,
  //           content: updatedLesson.content,
  //           courseId: updatedLesson.courseId,
  //         };
  //         const index = this.lessons?.findIndex(l => l.lessonId === updatedLessonObj.lessonId);
  //         if (index !== undefined && index !== -1) {
  //           this.lessons[index] = updatedLessonObj;
  //         }
  //       },
  //       error => {
  //         this.error = error;
  //       }
  //     );
  // }

  deleteLesson(lessonId: number): void {
    this.lessonService.deleteLesson(lessonId)
      .subscribe(
        () => {
          this.lessons = this.lessons?.filter(l => l.lessonId !== lessonId);
        },
        error => {
          this.error = error;
        }
      );
  }

  addLesson(): void {
    this.lessonService.addLessonToCourse(this.courseId, this.newLesson)
      .subscribe(
        (createdLesson: Lesson) => {
          this.lessons?.push(createdLesson);
          this.newLesson = { title: '', content: '', courseId: this.courseId, lessonId: 0};
        },
        error => {
          this.error = error;
        }
      );
  }


}
