import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit { 

  constructor() { }

  ngOnInit(): void {

  }

  
  getAll() {
    // Domaci 1
    // get all people
    // console log result
  }

  getSorted() {
    // Domaci 2
    // get people sorted by _id, descending
    // console log result
  }

  getFiltered() {
    // Domaci 2
    // get people filtered by idActive
    // console log result
  }

  getPage() {
    // Domaci 2
    // get third page of people, page size 4
    // console log result
  }

}
