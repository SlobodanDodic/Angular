import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../model/course';
import { CourseSearchResult } from '../model/courseSearchResult';

const baseURL = 'http://localhost:3000/api/courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(params: any): Observable<CourseSearchResult> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(baseURL, options).pipe(
      map((data: any) => {
        return new CourseSearchResult(data);
      })
    );
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get(baseURL + '/' + id).pipe(
      map((data: any) => {
        return new Course(data);
      })
    );
  }
}
