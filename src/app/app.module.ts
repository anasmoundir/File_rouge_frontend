import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { UserProfileComponent } from './user-management/user-profile/user-profile.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { CourseListComponent } from './course-management/course-list/course-list.component';
import { CourseDetailComponent } from './course-management/course-detail/course-detail.component';
import { CourseCreationComponent } from './course-management/course-creation/course-creation.component';
import { ResourceListComponent } from './resource-management/resource-list/resource-list.component';
import { ResourceUploadComponent } from './resource-management/resource-upload/resource-upload.component';
import { CategoryListComponent } from './category-management/category-list/category-list.component';
import { CategoryDetailComponent } from './category-management/category-detail/category-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ErrorHandlingComponent } from './miscellaneous/error-handling/error-handling.component';
import { ConfirmationDialogComponent } from './miscellaneous/confirmation-dialog/confirmation-dialog.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ChatComponent } from './optional/chat/chat.component';
import { CalendarComponent } from './optional/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent,
    UserListComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseCreationComponent,
    ResourceListComponent,
    ResourceUploadComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ErrorHandlingComponent,
    ConfirmationDialogComponent,
    SpinnerComponent,
    ChatComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
