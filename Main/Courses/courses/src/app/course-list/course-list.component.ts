import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { CourseSearchResult } from '../model/courseSearchResult';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: CourseSearchResult = new CourseSearchResult();
  sorting = [
    'bez sortiranja',
    'cena rastuća',
    'cena opadajuća',
    'trajanje rastuće',
    'trajanje opadajuće',
  ];

  params = {
    sort: '',
    sortDirection: '',
    filter: {
      name: '',
      weeksTo: '',
    },
  };

  constructor(private service: CourseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.service.getCourses(this.params).subscribe({
      next: (courses: CourseSearchResult) => {
        this.courses = courses;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  name(event: any): void {
    this.params.filter.name = event.target.value;
    this.getCourses();
  }

  weeks(event: any): void {
    this.params.filter.weeksTo = event.target.value;
    this.getCourses();
  }

  sort(event: any): void {
    if (event.target.value == 'bez sortiranja') {
      this.params.sort = '';
      this.params.sortDirection = '';
    } else if (event.target.value == 'cena rastuća') {
      this.params.sort = 'price';
      this.params.sortDirection = 'asc';
    } else if (event.target.value == 'cena opadajuća') {
      this.params.sort = 'price';
      this.params.sortDirection = 'desc';
    } else if (event.target.value == 'trajanje rastuće') {
      this.params.sort = 'weeks';
      this.params.sortDirection = 'asc';
    } else if (event.target.value == 'trajanje opadajuće') {
      this.params.sort = 'weeks';
      this.params.sortDirection = 'desc';
    }
    this.getCourses();
  }
}
