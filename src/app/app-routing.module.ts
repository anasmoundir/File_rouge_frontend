import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StudentpageComponent } from './components/studentpage/studentpage.component';
import { TeacherRegistrationComponent } from './components/authentication/teacher-registration/teacher-registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstructorApprovalComponent } from './components/instructor-approval/instructor-approval.component';

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
      // Example: { path: 'profile', component: ProfileComponent },
      // Example: { path: 'courses', component: CoursesComponent },
      // Example: { path: 'enrollments', component: EnrollmentsComponent },
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
