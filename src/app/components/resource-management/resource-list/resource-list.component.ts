import { HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonDTO } from 'src/app/dto/lesson.dto';
import { ResourcesDTO } from 'src/app/dto/resources.dto';
import { LessonService } from 'src/app/services/lesson.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {
  lessonId: number = 0;
  courseId: number = 0;
  lesson: LessonDTO | undefined;
  error: string | undefined;
  resources: ResourcesDTO[] | undefined;
  newResource: { title: string, description: string, file: File | undefined } = { title: '', description: '', file: undefined };
  showCreateModal: boolean = false;
  uploadProgress: number | undefined;

  constructor(private lessonService: LessonService,
              private resourceService: ResourceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonId = +params['lessonId'];
      this.getLessonById(this.lessonId);
    });
  }

  getLessonById(lessonId: number): void {
    this.lessonService.getLessonById(lessonId)
      .subscribe(
        (lesson: LessonDTO) => {
          this.lesson = lesson;
          this.courseId = lesson.course?.courseId ?? 0;
          console.log('Lesson:', lesson);
          console.log('Course ID:', this.courseId);
          this.getResourcesByLessonId(this.lessonId);
        },
        error => {
          this.error = error;
        }
      );
  }

  getResourcesByLessonId(lessonId: number): void {
    this.resourceService.getRessourcesByLessonId(lessonId)
      .subscribe(
        (data: ResourcesDTO[]) => {
          this.resources = data;
        },
        error => {
          this.error = error;
        }
      );
  }

  addResources(): void {
    if (!this.courseId || !this.lessonId || !this.newResource.file) {
      console.error('Course ID, Lesson ID, or file is undefined or null.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.newResource.file);
    formData.append('title', this.newResource.title);
    formData.append('description', this.newResource.description);
    formData.append('courseId', this.courseId.toString());
    formData.append('lessonId', this.lessonId.toString());

    this.resourceService.uploadResource(formData).subscribe(
      (data: ResourcesDTO) => {
        this.getResourcesByLessonId(this.lessonId);
        this.closeCreateModal();
      },
      error => {
        console.error('Error uploading resource:', error);
        this.error = error;
      },
      () => {
        this.uploadProgress = undefined;
      }
    );
  }


  deleteResource(id: number): void {
    this.resourceService.deleteResource(id)
      .subscribe(
        () => {
          this.getResourcesByLessonId(this.lessonId);
        },
        error => {
          this.error = error;
        }
      );
  }

  openCreateModal(): void {
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  onFileSelected(event: any): void {
    this.newResource.file = event.target.files[0];
  }
}
