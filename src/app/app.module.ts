import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { UserProfileComponent } from './components/user-management/user-profile/user-profile.component';
import { UserListComponent } from './components/user-management/user-list/user-list.component';
import { CourseListComponent } from './components/course-management/course-list/course-list.component';
import { ResourceListComponent } from './components/resource-management/resource-list/resource-list.component';
import { CategoryListComponent } from './components/category-management/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category-management/category-detail/category-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ErrorHandlingComponent } from './components/miscellaneous/error-handling/error-handling.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { ChatComponent } from './components/optional/chat/chat.component';
import { CalendarComponent } from './components/optional/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherRegistrationComponent } from './components/authentication/teacher-registration/teacher-registration.component';
import { TeacherpageComponent } from './components/teacherpage/teacherpage.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StudentNavComponent } from './components/shared/student-nav/student-nav.component';
import { TeacherNavComponent } from './components/shared/teacher-nav/teacher-nav.component';
import { AdminNavbarComponent } from './components/shared/admin-navbar/admin-navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { InstructorApprovalComponent } from './components/instructor-approval/instructor-approval.component';
import { CardsComponent } from './components/cards/cards.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ExploreCoursesComponent } from './components/explore-courses/explore-courses.component';
import { SearchCoursesComponent } from './components/search-courses/search-courses.component';
import { CourseDetailsStudentComponent } from './components/course-details-student/course-details-student.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ResourcePlayerComponent } from './components/resource-player/resource-player.component';
import { AccessDeniedComponentComponent } from './components/access-denied-component/access-denied-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { ExploreComponent } from './components/explore/explore.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent,
    UserListComponent,
    CourseListComponent,
    ResourceListComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ErrorHandlingComponent,
    SpinnerComponent,
    ChatComponent,
    CalendarComponent,
    HomeComponent,
    TeacherRegistrationComponent,
    TeacherpageComponent,
    NavbarComponent,
    CarouselComponent,
    StudentNavComponent,
    TeacherNavComponent,
    AdminNavbarComponent,
    SidebarComponent,
    InstructorApprovalComponent,
    CardsComponent,
    CategoryComponent,
    SubcategoryComponent,
    CoursesComponent,
    LessonListComponent,
    StudentDashboardComponent,
    ExploreCoursesComponent,
    CourseDetailsStudentComponent,
    SearchCoursesComponent,
    EnrollmentComponent,
      PlaylistComponent,
      ResourcePlayerComponent,
      AccessDeniedComponentComponent,
      ExploreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      closeButton: true
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('accessToken'),
        allowedDomains: ['http://localhost:4200']
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
