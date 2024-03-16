import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleList } from 'src/app/models/article.model';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-doc-form',
  templateUrl: './doc-form.component.html',
  styleUrls: ['./doc-form.component.css'],
})
export class DocFormComponent {
  @Input()
  articles: ArticleList = new ArticleList();

  @Output()
  itemAdded = new EventEmitter<Item>();

  form: FormGroup = new FormGroup({
    article: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.min(0)),
    quantity: new FormControl(0, Validators.min(0)),
  });

  saveItem() {
    let newItem = new Item(this.form.value);
    if (!this.form.valid) {
      alert('Please fill in the form');
      return;
    }
    this.itemAdded.emit(newItem);
    this.form.reset;
  }
}
