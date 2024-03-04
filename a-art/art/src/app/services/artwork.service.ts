import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artwork } from '../model/artwork';
import { Observable, map } from 'rxjs';

const baseURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  constructor(private http: HttpClient) {}

  getArtworksForExibition(exibitionId: number): Observable<Artwork[]> {
    return this.http
      .get(`${baseURL}/api/exibitions/${exibitionId}/artworks`)
      .pipe(
        map((data: any) => {
          return data.map((item: any) => new Artwork(item));
        })
      );
  }

  getImageUrl(imageId: string): string {
    return `${baseURL}/image/${imageId}.jpg`;
  }

  getImage(imageId: string): Observable<any> {
    return this.http.get(this.getImageUrl(imageId), {
      responseType: 'blob',
    });
  }
}
