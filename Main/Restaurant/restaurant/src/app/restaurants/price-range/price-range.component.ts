import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css']
})
export class PriceRangeComponent {

  @Output()
  priceChange: EventEmitter<{from:number, to: number}> = new EventEmitter();

  priceFromControl = new FormControl(1)
  priceToControl = new FormControl(5)


  onPriceChanged(): void {
    let priceRange = {
      from: this.priceFromControl.value || 1,
      to: this.priceToControl.value || 5
    }
    this.priceChange.emit(priceRange)
  }

}
