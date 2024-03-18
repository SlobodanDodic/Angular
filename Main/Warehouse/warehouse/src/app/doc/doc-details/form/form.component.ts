import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleList } from 'src/app/model/article.model';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input()
  articles: ArticleList = new ArticleList();

  @Output()
  itemAdded = new EventEmitter<Item>();

  itemForm: FormGroup = new FormGroup({
    article: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.min(0)),
    quantity: new FormControl(0, Validators.min(0)),
  });

  saveItem() {
    let newItem = new Item(this.itemForm.value);
    if (!this.itemForm.valid) {
      alert('Please fill in the form');
      return;
    } else {
      this.itemAdded.emit(newItem);
      this.itemForm.reset;
    }
  }
}
