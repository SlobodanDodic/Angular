import { Component, Input } from '@angular/core';
import { ArticleList } from 'src/app/models/article.model';
import { ItemList } from 'src/app/models/item.model';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css'],
})
export class DocListComponent {
  @Input() items: ItemList = new ItemList();
  @Input() articles: ArticleList = new ArticleList();

  codeToArticleName(code: string) {
    let name = '';
    for (let art of this.articles.results) {
      if (art.code == code) {
        name = art.name;
        break;
      }
    }
    return name;
  }
}
