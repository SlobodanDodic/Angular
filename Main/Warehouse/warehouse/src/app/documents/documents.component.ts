import { Component, OnInit } from '@angular/core';
import { DocumentList } from '../models/document.model';
import { DocService } from '../service/doc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  documentList: DocumentList = new DocumentList();

  params = {
    page: 1,
    pageSize: 10,
    sort: '',
    sortDirection: '',
  };

  settings = {
    dateOfCreation: true,
    dateOfRecording: true,
    status: true,
    transactionType: true,
    businessPartner: true,
    businessPartnerLocation: true,
    year: true,
  };

  showSettings = false;

  constructor(private service: DocService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.route.params.subscribe(() => {
      this.service.getDocuments(this.params).subscribe({
        next: (documents: DocumentList) => {
          this.documentList = documents;
        },
        error: (err: any) => {
          console.log('error: ', err);
        },
      });
    });
  }

  onPageChanged(newPage: number) {
    this.params.page = newPage;
    this.getDocuments();
  }

  handleSort(columnName: string) {
    this.params.sortDirection =
      this.params.sortDirection == 'asc' ? 'desc' : 'asc';
    this.params.sort = columnName;
    this.getDocuments();
  }
}
