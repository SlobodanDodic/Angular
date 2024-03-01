import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../model/person.model';

const baseURL = 'http://localhost:3000/api/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  persons: Array<Person> = [];

  queryParams = {
    id: 0,
    page: 3,
    pageSize: 4,
    filter: {
      idActive: true,
    },
  };

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  getAll() {
    this.personService.getAll().subscribe({
      next: (persons: Array<Person>) => {
        console.log(persons);
        this.persons = persons;
      },
      error: (err) => console.log(err),
    });
  }

  getSorted() {
    this.personService.getSorted(this.queryParams).subscribe({
      next: (persons: Array<Person>) => {
        this.persons = persons;
        console.log(persons);
      },
      error: (err) => console.log(err),
    });
  }

  getFiltered() {
    this.personService.getFiltered(this.queryParams).subscribe({
      next: (persons: Array<Person>) => {
        console.log(persons);
        this.persons = persons;
      },
      error: (err) => console.log(err),
    });
  }

  getPage() {
    this.personService.getPage(this.queryParams).subscribe({
      next: (persons: Array<Person>) => {
        console.log(persons);
        this.persons = persons;
      },
      error: (err) => console.log(err),
    });
  }
}
