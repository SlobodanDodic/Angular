import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artwork } from 'src/app/model/artwork.model';

@Component({
  selector: 'app-exibition-edit',
  templateUrl: './exibition-edit.component.html',
  styleUrls: ['./exibition-edit.component.css'],
})
export class ExibitionEditComponent {
  @Input()
  showEdit: boolean = false;

  @Output()
  doneClick: EventEmitter<void> = new EventEmitter();

  @Input()
  allArtworks: Artwork[] = [];

  @Input()
  artworks: Artwork[] = [];

  @Output()
  addClick: EventEmitter<number> = new EventEmitter();

  @Output()
  removeClick: EventEmitter<number> = new EventEmitter();

  @Output()
  searchClick: EventEmitter<string> = new EventEmitter();

  onDoneClicked(): void {
    this.doneClick.emit();
  }

  onAddClicked(artwork: Artwork): void {
    this.addClick.emit(artwork._id);
  }

  onRemoveClicked(artwork: Artwork): void {
    this.removeClick.emit(artwork._id);
  }

  searchInput: FormControl = new FormControl('');

  onSearchClicked(): void {
    this.searchClick.emit(this.searchInput.value);
  }
}
