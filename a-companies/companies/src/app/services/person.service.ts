import { Injectable } from '@angular/core';

const baseURL = "http://localhost:3000/api/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
}