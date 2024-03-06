import { Component, Input } from '@angular/core';
import { Artwork } from 'src/app/model/artwork.model';

@Component({
  selector: 'app-artwork-offcanvas',
  templateUrl: './artwork-offcanvas.component.html',
  styleUrls: ['./artwork-offcanvas.component.css'],
})
export class ArtworkOffcanvasComponent {
  @Input() artwork: Artwork = new Artwork();
}
