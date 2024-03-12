import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { TeacherRegistrationComponent } from './authentication/teacher-registration/teacher-registration.component';
import { DashboardComponent } from './Dashbord/dashboard/dashboard.component';
import { InstructorApprovalComponent } from './instructor-approval/instructor-approval.component';

const routes: Routes = [
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teacherRegister', component: TeacherRegistrationComponent },
  { path: 'student', component: StudentpageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },

      { path: 'approveInstructor', component: InstructorApprovalComponent }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
