import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Application, ApplicationList } from '../model/application';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getApplications(): Observable<ApplicationList> {
    return this.http.get(`${baseURL}/applications`).pipe(
      map((data: any) => {
        return new ApplicationList(data);
      })
    );
  }

  createApplication(application: Application): Observable<Application> {
    return this.http.post(`${baseURL}/applications`, application).pipe(
      map((data: any) => {
        return new Application(data);
      })
    );
  }

  getApplicationByEmail(email: string): Observable<Application[]> {
    return this.http.get(`${baseURL}/candidates/${email}/applications`).pipe(
      map((data: any) => {
        return data.map((app: any) => new Application(app));
      })
    );
  }

  deleteApplication(id: number): Observable<Application> {
    return this.http.delete(`${baseURL}/applications/${id}`).pipe(
      map((data: any) => {
        return new Application(data);
      })
    );
  }
}
