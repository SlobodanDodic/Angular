import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exibition } from '../model/exibition.model';
import { Observable, map } from 'rxjs';
import { Artwork } from '../model/artwork.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ExibitionService {
  constructor(private http: HttpClient) {}

  getExibitions(): Observable<Exibition[]> {
    return this.http.get(`${baseURL}/exibitions`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Exibition(elem))) || [];
      })
    );
  }

  getExibition(exibitionId: number): Observable<Exibition> {
    return this.http.get(`${baseURL}/exibitions/${exibitionId}`).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  getArtworksFromExibition(exibitionId: number): Observable<Artwork[]> {
    return this.http.get(`${baseURL}/exibitions/${exibitionId}/artworks`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Artwork(elem))) || [];
      })
    );
  }

  getAllArtworks(): Observable<Artwork[]> {
    return this.http.get(`${baseURL}/artworks`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Artwork(elem))) || [];
      })
    );
  }

  addArtworkToExibition(
    artworkId: number,
    exibitionId: number
  ): Observable<any> {
    return this.http.put(
      `${baseURL}/exibitions/${exibitionId}/artworks/${artworkId}`,
      {}
    );
  }

  removeArtworkFromExibition(
    artworkId: number,
    exibitionId: number
  ): Observable<any> {
    return this.http.delete(
      `${baseURL}/exibitions/${exibitionId}/artworks/${artworkId}`
    );
  }

  getArtworks(filter?: any): Observable<Artwork[]> {
    let options = {
      params: new HttpParams()
        .set('filter', (filter && JSON.stringify(filter)) || '{}')
        .set('sort', 'author')
        .set('sortDirection', 'asc'),
    };
    return this.http.get(`${baseURL}/artworks`, options).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Artwork(elem))) || [];
      })
    );
  }

  add(exibition: Exibition): Observable<Exibition> {
    return this.http.post(`${baseURL}/exibitions`, exibition).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }
}
