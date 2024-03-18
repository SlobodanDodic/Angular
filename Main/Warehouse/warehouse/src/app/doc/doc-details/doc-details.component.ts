import { Component } from '@angular/core';
import { DocService } from 'src/app/services/doc.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Doc } from 'src/app/model/doc.model';
import { Item, ItemList } from 'src/app/model/item.model';
import { ArticleList } from 'src/app/model/article.model';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css'],
})
export class DocDetailsComponent {
  id: number = 0;
  doc: Doc = new Doc();
  items: ItemList = new ItemList();
  articles: ArticleList = new ArticleList();
  dateNow = new Date();
  articleNames: { [key: string]: string } = {};
  status: string = '';

  constructor(private service: DocService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getDoc();
      }
    });
  }

  getDoc(): void {
    this.service.getDoc(this.id).subscribe({
      next: (doc: Doc) => {
        this.doc = doc;
        this.status = this.doc.status;
        this.getItems();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  getItems(): void {
    this.service.getItems(this.id).subscribe({
      next: (items: ItemList) => {
        this.items = items;
        this.getArticles();
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  getArticles(): void {
    this.service.getArticles().subscribe({
      next: (articles: ArticleList) => {
        this.articles = articles;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  onSave(newItem: any): void {
    this.service.addItem(this.id, newItem).subscribe({
      next: (_item: Item) => {
        this.getItems();
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  recordDocument(doc: Doc): void {
    this.service
      .recordDocument(doc._id, {
        status: 'recorded',
        dateOfRecording: new Date().toISOString(),
        _id: doc._id,
        dateOfCreation: doc.dateOfCreation,
        transactionType: doc.transactionType,
        year: doc.year,
        businessPartner: doc.businessPartner,
      })
      .subscribe({
        next: (_data: Doc) => {
          this.getDoc();
        },
        error: (err: any) => {
          console.log('error: ', err);
        },
      });
  }
}
