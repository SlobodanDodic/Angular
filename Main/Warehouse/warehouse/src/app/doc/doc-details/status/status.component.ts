import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doc } from 'src/app/model/doc.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent {
  @Input() doc: Doc = new Doc();
  @Output() docUpdated = new EventEmitter<Doc>();

  updateDocument(): void {
    this.docUpdated.emit(this.doc);
  }
}
