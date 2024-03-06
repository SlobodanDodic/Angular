import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exibition } from 'src/app/model/exibition.model';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibtion-item.component.html',
  styleUrls: ['./exibtion-item.component.css']
})
export class ExibitionItemComponent {

  @Input()
  exibition: Exibition = new Exibition();

  @Input()
  showEdit: boolean = false;

  @Output()
  editClick: EventEmitter<void> = new EventEmitter();

  onEditClicked(): void {
    this.editClick.emit();
  }
}
