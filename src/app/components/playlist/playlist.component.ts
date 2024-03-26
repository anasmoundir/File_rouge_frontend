import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonDTO } from 'src/app/dto/lesson.dto';
import { ResourcesDTO } from 'src/app/dto/resources.dto';
import { LessonService } from 'src/app/services/lesson.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  lessons: LessonDTO[] = [];
  selectedLesson: LessonDTO | null = null;
  resources: ResourcesDTO[] = [];

  constructor(
    private lessonService: LessonService,
    private resourceService: ResourceService,
    private route: ActivatedRoute
  ) { }
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
          this.fetchResourcesByLessonId(this.selectedLesson.lessonId);
        }
      },
      (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }

  selectLesson(lesson: LessonDTO): void {
    this.selectedLesson = lesson;
    this.fetchResourcesByLessonId(lesson.lessonId);
  }

  fetchResourcesByLessonId(lessonId: number): void {
    this.resourceService.getRessourcesByLessonId(lessonId).subscribe(
      (resources: ResourcesDTO[]) => {
        this.resources = resources;
      },
      (error) => {
        console.error('Error fetching resources:', error);
      }
    );
  }
  isLessonSelected(lesson: LessonDTO): boolean {
    return this.selectedLesson === lesson;
  }

}
