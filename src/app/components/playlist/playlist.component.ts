import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonDTO } from 'src/app/dto/lesson.dto';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  lessons: LessonDTO[] = [];
  selectedLesson: LessonDTO | null = null;

  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseIdParam = params.get('courseId');
      if (courseIdParam !== null) {
        const courseId = +courseIdParam;
        this.fetchLessons(courseId);
      }
    });
  }

  fetchLessons(courseId: number): void {
    this.lessonService.getLessonsByCourseId(courseId).subscribe(
      (lessons: LessonDTO[]) => {
        this.lessons = lessons;
        if (lessons.length > 0) {
          this.selectedLesson = lessons[0];
        }
      },
      (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }

  selectLesson(lesson: LessonDTO): void {
    this.selectedLesson = lesson;
  }

  isLessonSelected(lesson: LessonDTO): boolean {
    return this.selectedLesson === lesson;
  }
}
