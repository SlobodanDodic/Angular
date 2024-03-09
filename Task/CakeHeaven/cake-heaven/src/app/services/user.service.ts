import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get(`${baseURL}/user`).pipe(
      map((data: any) => {
        return data && new User(data[0]);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`${baseURL}/user/${user._id}`, user).pipe(
      map((data: any) => {
        return new User(data);
      })
    );
  }

  postMessage(message: Message): Observable<any> {
    return this.http.post(`${baseURL}/messages`, message);
  }
}
