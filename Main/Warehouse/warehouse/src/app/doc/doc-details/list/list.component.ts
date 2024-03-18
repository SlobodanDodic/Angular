import { Component, Input } from '@angular/core';
import { ArticleList } from 'src/app/model/article.model';
import { ItemList } from 'src/app/model/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() items: ItemList = new ItemList();
  @Input() articles: ArticleList = new ArticleList();

  codeToArticleName(itemCode: string) {
    let name = '';
    for (let article of this.articles.results) {
      if (article.code == itemCode) {
        name = article.name;
        break;
      }
    }
    return name;
  }
}
