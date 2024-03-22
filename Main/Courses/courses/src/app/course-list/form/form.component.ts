import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from 'src/app/model/application';
import { Course } from 'src/app/model/course';
import { CourseSearchResult } from 'src/app/model/courseSearchResult';
import { ApplicationService } from 'src/app/services/application.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() courseName: string = '';
  course: Course = new Course();

  application: Application = new Application();
  courses: CourseSearchResult = new CourseSearchResult();

  courseForm: FormGroup = new FormGroup({
    course: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    eMail: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  params = {
    sort: '',
    sortDirection: '',
    filter: {
      name: '',
      weeksTo: '',
    },
  };

  constructor(
    private service: CourseService,
    private appService: ApplicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.service.getCourses(this.params).subscribe({
      next: (courses: CourseSearchResult) => {
        this.courses = courses;
        this.populateName(this.courseName);
        this.course = this.courseName
          ? this.courses.results.filter((c) => c.name === this.courseName)[0]
          : this.courses.results.filter(
              (c) => c.name === this.courseForm.value.course
            )[0];
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  populateName(courseName: string): void {
    this.courseForm.patchValue({ course: courseName });
  }

  createApplication(): void {
    const newApp: Application = new Application({
      ...this.courseForm.value,
      course: this.course,
      date: Date.now(),
      id: -1,
    });

    this.appService.createApplication(newApp).subscribe({
      next: (_data: any) => {
        this.courseForm.reset();
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        if (err.status === 409) {
          console.log('error: ', err);
          alert('Prijava sa istim email vec postoji');
        } else {
          console.log('error: ', err);
        }
      },
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      this.createApplication();
    } else {
      alert('Form is not valid');
    }
  }

  onChangeCourse(event: any): void {
    this.courseName = event.target.value;
    this.getCourses();
  }
}
