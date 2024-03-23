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
import { ConfirmationDialogComponent } from './components/miscellaneous/confirmation-dialog/confirmation-dialog.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { ChatComponent } from './components/optional/chat/chat.component';
import { CalendarComponent } from './components/optional/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { StudentpageComponent } from './components/studentpage/studentpage.component';
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
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';


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
    ConfirmationDialogComponent,
    SpinnerComponent,
    ChatComponent,
    CalendarComponent,
    HomeComponent,
    StudentpageComponent,
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


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
