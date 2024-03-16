import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from 'src/app/model/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  @Input() review: Review = new Review();
  @Output() deleteReview: EventEmitter<Review> = new EventEmitter();

  deleteReviewClicked(review: Review): void {
    this.deleteReview.emit(review);
  }
}
