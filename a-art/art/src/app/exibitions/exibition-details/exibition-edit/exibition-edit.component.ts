import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artwork } from 'src/app/model/artwork.model';

@Component({
  selector: 'app-exibition-edit',
  templateUrl: './exibition-edit.component.html',
  styleUrls: ['./exibition-edit.component.css']
})
export class ExibitionEditComponent {

  @Input()
  exibitionArtworks: Artwork[] = [];

  @Input()
  allArtworks: Artwork[] = [];

  @Output()
  searchClick: EventEmitter<string> = new EventEmitter();

  @Output()
  doneClick: EventEmitter<void> = new EventEmitter();

  @Output()
  addArtwork: EventEmitter<number> = new EventEmitter();

  @Output()
  removeArtwork: EventEmitter<number> = new EventEmitter();

  searchInput: FormControl = new FormControl("");

  onSearchClicked(): void {
    this.searchClick.emit(this.searchInput.value)
  }

  onDoneClicked(): void {
    this.doneClick.emit();
  }

  onAddClicked(artwork: Artwork): void {
    this.addArtwork.emit(artwork._id);
  }

  onRemoveClicked(artwork: Artwork): void {
    this.removeArtwork.emit(artwork._id)
  }

}
