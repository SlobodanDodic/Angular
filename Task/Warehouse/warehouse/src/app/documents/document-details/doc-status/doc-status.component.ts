import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from 'src/app/models/document.model';

@Component({
  selector: 'app-doc-status',
  templateUrl: './doc-status.component.html',
  styleUrls: ['./doc-status.component.css'],
})
export class DocStatusComponent {
  @Input() doc: Document = new Document();
  @Output() docUpdated = new EventEmitter<Document>();

  updateDocument() {
    this.doc.status = 'recorded';
    this.doc.dateOfRecording = new Date().toISOString();
    this.docUpdated.emit(this.doc);
  }
}
