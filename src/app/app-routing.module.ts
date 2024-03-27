import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherRegistrationComponent } from './components/authentication/teacher-registration/teacher-registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstructorApprovalComponent } from './components/instructor-approval/instructor-approval.component';
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { TeacherpageComponent } from './components/teacherpage/teacherpage.component';
import { CourseListComponent } from './components/course-management/course-list/course-list.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { ResourceListComponent } from './components/resource-management/resource-list/resource-list.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ExploreCoursesComponent } from './components/explore-courses/explore-courses.component';
import { CourseDetailsStudentComponent } from './components/course-details-student/course-details-student.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ResourcePlayerComponent } from './components/resource-player/resource-player.component';
import { AccessDeniedComponentComponent } from './components/access-denied-component/access-denied-component.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin-guard.guard';
import { TeacherGuard } from './guards/teacher-guard.guard';
import { ExploreComponent } from './components/explore/explore.component';

const routes: Routes = [
  {path:'explore',component:ExploreComponent},
  { path: 'access-denied', component: AccessDeniedComponentComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teacherRegister', component: TeacherRegistrationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: 'teacher',
    component: TeacherpageComponent,
    children: [
      { path: 'Mycourse', component: CourseListComponent },
      { path: 'lessons/:courseId', component: LessonListComponent },
      { path: 'resources/lesson/:lessonId', component: ResourceListComponent },
    ],
    canActivate: [AuthGuard,TeacherGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'approveInstructor', component: InstructorApprovalComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'subcategory', component: SubcategoryComponent },
    ],
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path: 'student',
    component: StudentDashboardComponent,
    children: [
      { path: 'ExploreCourses', component: ExploreCoursesComponent },
      { path: 'courseDetailsStudent/:courseId', component: CourseDetailsStudentComponent },
      { path: 'enrollment', component: EnrollmentComponent },
      { path: 'startLearning/:courseId', component: PlaylistComponent },
      { path: 'resourcePlayer/:resourceId', component: ResourcePlayerComponent }

    ],
    canActivate: [AuthGuard]
  },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
