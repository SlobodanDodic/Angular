import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';
import { CourseModuleComponent } from './course-list/course-details/course-module/course-module.component';
import { FormComponent } from './course-list/form/form.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    AboutComponent,
    NavbarComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    CourseModuleComponent,
    FormComponent,
    ApplicationListComponent,
    ApplicationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
