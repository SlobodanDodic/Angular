import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  id: number = 0;
  course: Course = new Course();
  accordianInfoTitle: string = 'Osnovne informacije';
  accordianModulTitle: string = 'Sadržaj kursa';

  constructor(private service: CourseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getCourse();
      }
    });
  }

  getCourse(): void {
    this.service.getCourse(this.id).subscribe({
      next: (course: Course) => {
        this.course = course;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
