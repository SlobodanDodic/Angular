import { Component } from '@angular/core';
import { Slideshow } from '../model/slideshow.model';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  slideshow: Slideshow[] = [];
  images = this.slideshow.map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private service: CakeService) {}

  ngOnInit(): void {
    this.getSlideshow();
  }

  getSlideshow(): void {
    this.service.getCarousel().subscribe({
      next: (slideshow: Slideshow[]) => {
        this.slideshow = slideshow;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
