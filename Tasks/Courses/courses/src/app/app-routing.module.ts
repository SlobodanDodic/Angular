import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "courses", component: CourseListComponent}, 
  {path: "about", component: AboutComponent}, 
  {path: "", redirectTo: "courses", pathMatch: "prefix"}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
