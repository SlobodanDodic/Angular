import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exibition } from 'src/app/model/exibition';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibition-item.component.html',
  styleUrls: ['./exibition-item.component.css'],
})
export class ExibitionItemComponent {
  @Input() exibition: Exibition = new Exibition();
  @Input() btn: boolean = false;

  @Output() toggleClick: EventEmitter<void> = new EventEmitter<void>();

  onToggleClick() {
    this.toggleClick.emit(); // Prosleđuje događaj klikanja na dugme edit
  }
}
