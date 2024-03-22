import { Component, Input } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css'],
})
export class CourseModuleComponent {
  @Input() course: Course = new Course();
  @Input() accordianModulTitle: string = '';
  @Input() accordianInfoTitle: string = '';
}
