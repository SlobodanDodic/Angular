import { Component, Input, inject } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant.model';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant = new Restaurant();

  private modalService = inject(NgbModal);

  constructor(config: NgbRatingConfig) {
    config.readonly = true;
    config.max = 5;
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.restaurant = this.restaurant;
  }

  generateCoinsArray(): number[] {
    return Array.from({ length: 5 }, (_, index) => index + 1);
  }
}
