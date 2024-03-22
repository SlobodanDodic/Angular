import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutComponent } from './about/about.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'application-list', component: ApplicationListComponent },
  { path: 'application-form', component: ApplicationFormComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
