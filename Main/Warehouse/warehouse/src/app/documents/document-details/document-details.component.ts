import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleList } from 'src/app/models/article.model';
import { Document } from 'src/app/models/document.model';
import { Item, ItemList } from 'src/app/models/item.model';
import { DocService } from 'src/app/service/doc.service';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css'],
})
export class DocumentDetailsComponent implements OnInit {
  docId: number = 0;
  doc: Document = new Document();
  items: ItemList = new ItemList();
  articles: ArticleList = new ArticleList();

  constructor(
    private docService: DocService,
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.docId = params['id'];
      this.getDocument();
      this.getItems();
      this.getArticles();
    });
  }

  getDocument() {
    this.docService.getDocument(this.docId).subscribe({
      next: (response: Document) => {
        this.doc = response;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  getItems() {
    this.itemService.getItems(this.docId).subscribe({
      next: (response: ItemList) => {
        this.items = response;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  getArticles() {
    this.itemService.getArticles().subscribe({
      next: (response: ArticleList) => {
        this.articles = response;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onSave(newItem: any): void {
    this.itemService.additem(newItem, this.docId).subscribe({
      next: (_item: Item) => {
        this.getItems();
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  recordDocument(body: Document) {
    this.docService.recordDocument(body, this.docId).subscribe({
      next: (_response: Document) => {
        this.getDocument();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }
}
