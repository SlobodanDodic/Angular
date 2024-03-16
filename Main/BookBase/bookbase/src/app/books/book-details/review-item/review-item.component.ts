import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Review } from 'src/app/model/review.model';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css'],
})
export class ReviewItemComponent implements OnInit {
  @Input() review: Review = new Review();
  @Output() deleteReview: EventEmitter<Review> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteReviewClicked(review: Review): void {
    this.deleteReview.emit(review);
  }
}
