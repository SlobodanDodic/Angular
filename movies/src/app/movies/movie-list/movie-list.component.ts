import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.readAll().subscribe({
      next: (response: any) => {
        this.movies = response.map((jsonMovie: any) => {
          return new Movie(jsonMovie);
        });
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      },
    });
  }
  onDelete(id: number): void {
    this.movieService.delete(id).subscribe({
      next: (response: any) => {
        this.ngOnInit();
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      },
    });
  }
}
