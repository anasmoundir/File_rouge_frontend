import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonDTO } from 'src/app/dto/lesson.dto';
import { ResourcesDTO } from 'src/app/dto/resources.dto';
import { Lesson } from 'src/app/models/lesson.interface';
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

  constructor(private lessonService: LessonService,
              private resourceService: ResourceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonId = +params['lessonId'];
      this.getLessonById(this.lessonId);
      this.getResourcesByLessonId(this.lessonId);
    });
  }

  getLessonById(lessonId: number): void {
    this.lessonService.getLessonById(lessonId)
      .subscribe(
        (data: LessonDTO) => {
          this.lesson = data;
          this.courseId = data.courseId; 
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
    const resourcesDTO: ResourcesDTO = {
      ressourceId: 0,
      url: '',
      title: this.newResource.title,
      description: this.newResource.description,
      courseId: this.courseId,
      lessonId: this.lessonId,
      file: this.newResource.file || new File([], '')
    };

    this.resourceService.uploadResource(resourcesDTO)
      .subscribe(
        (data: ResourcesDTO) => {
          this.getResourcesByLessonId(this.lessonId);
          this.closeCreateModal();
        },
        error => {
          this.error = error;
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
