import { Component, OnInit } from '@angular/core';
import { Email } from '../model/email';
import { EMAILS } from '../data/emails';

@Component({
  selector: 'emails-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
})
export class EmailListComponent implements OnInit {
  emails: Email[] = [];
  unread: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.emails = EMAILS.map((email) => new Email(email));
  }

  onReadUnreadMail(email: Email): void {
    email.read === false ? this.unread++ : this.unread--;
  }
}
