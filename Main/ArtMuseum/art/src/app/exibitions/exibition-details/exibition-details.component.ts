import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artwork } from 'src/app/model/artwork.model';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-exibition-details',
  templateUrl: './exibition-details.component.html',
  styleUrls: ['./exibition-details.component.css'],
})
export class ExibitionDetailsComponent implements OnInit {
  exibitionId: number = 0;
  exibition: Exibition = new Exibition();
  artworks: Artwork[] = [];
  allArtworks: Artwork[] = [];

  showEdit: boolean = false;

  artworkFilter = {
    author: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: ExibitionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id'];
      this.getExibition();
      this.getExibitionArtworks();
      this.getAllArtworks();
    });
  }

  getExibition(): void {
    this.service.getOne(this.exibitionId).subscribe({
      next: (exibition: Exibition) => {
        this.exibition = exibition;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getExibitionArtworks(): void {
    this.service.getExibitionArtworks(this.exibitionId).subscribe({
      next: (artworks: Artwork[]) => {
        this.artworks = artworks;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getAllArtworks(): void {
    this.service.getArtworks(this.artworkFilter).subscribe({
      next: (artworks: Artwork[]) => {
        this.allArtworks = artworks.filter(
          (artwork: Artwork) => artwork.exibition_id == -1
        );
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onAddArtwork(artworkId: number): void {
    this.service.addArtworkToExibition(artworkId, this.exibitionId).subscribe({
      next: () => {
        this.getAllArtworks();
        this.getExibitionArtworks();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onRemoveArtwork(artworkId: number): void {
    this.service
      .removeArtworkFromExibition(artworkId, this.exibitionId)
      .subscribe({
        next: () => {
          this.getAllArtworks();
          this.getExibitionArtworks();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  onEditClicked(): void {
    this.showEdit = true;
  }

  onDoneClicked(): void {
    this.showEdit = false;
  }

  onSearchClicked(searchValue: string): void {
    this.artworkFilter.author = searchValue;
    this.getAllArtworks();
  }
}
