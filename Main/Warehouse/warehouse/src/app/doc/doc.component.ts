import { Component, OnInit } from '@angular/core';
import { DocService } from '../services/doc.service';
import { DocList } from '../model/doc.model';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
})
export class DocComponent implements OnInit {
  docs: DocList = new DocList();
  showColumns = false;

  columns = [
    { name: 'Creation Date', field: 'creationDate', visible: true },
    { name: 'Recording Date', field: 'dateOfRecording', visible: true },
    { name: 'Status', field: 'status', visible: true },
    { name: 'Transaction', field: 'transactionType', visible: true },
    { name: 'Business Partner', field: 'businessPartner', visible: true },
    {
      name: 'Partner Location',
      field: 'partnerLocation',
      visible: true,
    },
    { name: 'Year', field: 'year', visible: true },
  ];

  params = {
    sort: '',
    sortDirection: '',
    page: 1,
    pageSize: 10,
  };

  constructor(private service: DocService) {}

  ngOnInit(): void {
    this.getDocs();
  }

  getDocs(): void {
    this.service.getDocs(this.params).subscribe({
      next: (docs: DocList) => {
        this.docs = docs;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onPageChanged(newPage: number) {
    this.params.page = newPage;
    this.getDocs();
  }

  onSort(prop: string): void {
    this.params.sort = prop;
    this.params.sortDirection =
      this.params.sortDirection == 'desc' ? 'asc' : 'desc';
    this.getDocs();
  }

  toggleColumn(column: any) {
    column.visible = !column.visible;
  }

  toggleCheckboxVisibility() {
    this.showColumns = !this.showColumns;
  }
}
