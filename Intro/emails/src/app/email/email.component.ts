import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../model/email';

@Component({
  selector: 'emails-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  @Input() email: Email = new Email();
  @Output() readUnread: EventEmitter<Email> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onReadChange(): void {
    this.email.read = !this.email.read;
    this.readUnread.emit(this.email);
  }
}
