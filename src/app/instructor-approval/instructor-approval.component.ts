import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-approval',
  templateUrl: './instructor-approval.component.html',
  styleUrls: ['./instructor-approval.component.css']
})
export class InstructorApprovalComponent   {
  pendingRequests: any[] = [];

  // constructor(private apiService: ApiService) { }

  // ngOnInit(): void {
  //   // Fetch pending instructor requests from the backend when the component initializes
  //   this.apiService.getPendingInstructorRequests().subscribe((requests: any[]) => {
  //     this.pendingRequests = requests;
  //   });
  // }

  approveRequest(request: any): void {
  }

  rejectRequest(request: any): void {
  }
}
