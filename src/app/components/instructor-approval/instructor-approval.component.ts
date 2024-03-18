import { Component } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-instructor-approval',
  templateUrl: './instructor-approval.component.html',
  styleUrls: ['./instructor-approval.component.css']
})
export class InstructorApprovalComponent   {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teacherService.getAllTeachers().subscribe(
      (teachers: Teacher[]) => {
        console.log('Teachers:', teachers);
        this.teachers = teachers;
      },
      (error: any) => {
        console.error('Error fetching teachers:', error);
      }
    );
  }

  approveTeacher(teacherId: number): void {
    this.teacherService.approveTeacher(teacherId).subscribe(
      (response: Teacher) => {
        console.log('Teacher approved successfully:', response);
        this.loadTeachers();
      },
      (error: any) => {
        console.error('Error approving teacher:', error);
      }
    );
  }
}
