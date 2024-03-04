import {
  Component,
  OnInit,
  inject,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

import { Artwork } from 'src/app/model/artwork';
import { Exibition } from 'src/app/model/exibition';
import { ArtworkService } from 'src/app/services/artwork.service';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-exibition-detail',
  templateUrl: './exibition-detail.component.html',
  styleUrls: ['./exibition-detail.component.css'],
})
export class ExibitionDetailComponent implements OnInit {
  exibitionId: number = 0;
  exibition: Exibition = new Exibition();
  artworks: Artwork[] = [];
  images: Map<number, string> = new Map<number, string>();

  @Output() toggleClick: EventEmitter<void> = new EventEmitter<void>();

  showDiv1: boolean = true;
  toggle() {
    this.showDiv1 = !this.showDiv1;
    this.toggleClick.emit();
  }

  private offcanvasService = inject(NgbOffcanvas);

  constructor(
    private route: ActivatedRoute,
    private exibitionService: ExibitionService,
    private artworkService: ArtworkService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id'];
      this.loadExibitionData();
    });
  }

  loadExibitionData(): void {
    this.exibitionService.getOne(this.exibitionId).subscribe({
      next: (exibition: Exibition) => {
        this.exibition = exibition;
        this.loadArtworks();
      },
      error: (err) => console.log(err),
    });
  }

  loadArtworks(): void {
    this.artworkService.getArtworksForExibition(this.exibitionId).subscribe({
      next: (artworks: Artwork[]) => {
        this.artworks = artworks.filter(
          (artwork: Artwork) => artwork.exibition_id == this.exibitionId
        );
        this.loadImages();
      },
      error: (err) => console.log(err),
    });
  }

  loadImages(): void {
    this.artworks.forEach((artwork: Artwork) => {
      this.artworkService.getImage(artwork.imageId).subscribe({
        next: (imageBlob: Blob) => {
          const imageUrl = URL.createObjectURL(imageBlob);
          this.images.set(artwork._id, imageUrl);
        },
        error: (error) => {
          console.error('Error fetching image:', error);
        },
      });
    });
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
