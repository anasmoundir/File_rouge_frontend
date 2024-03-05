import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentpageComponent } from './studentpage/studentpage.component';

const routes: Routes = [
  { path: 'Registration', component: RegistrationComponent },
  { path:"Login",component:LoginComponent},
  { path: 'home', component: HomeComponent },
  
  { path: 'student', component: StudentpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
