import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem, MenuList } from 'src/app/model/menu.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Day, Days, Restaurant } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() restaurant: Restaurant = new Restaurant();

  activeModal = inject(NgbActiveModal);

  menuList: MenuList = new MenuList();
  menuItems: MenuItem[] = [];

  daysWithHours: { day: string; hours: Day }[] = [];
  daysOfTheWeek: string[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.restaurant) {
      this.getMenuList();
      this.days();
    }
  }

  getMenuList(): void {
    this.service.getMenuList(this.restaurant._id).subscribe({
      next: (menuList: MenuList) => {
        this.menuList = menuList;
        this.menuItems = this.menuList.results[0].items;
      },
      error: (err: any) => {
        console.log('error: ', err);
      },
    });
  }

  days() {
    this.daysWithHours = Object.entries(this.restaurant.days)
      .filter(([_, { opens, closes }]) => opens && closes)
      .map(([day, { opens, closes }]) => ({
        day: this.getDayString(+day),
        hours: new Day({ opens, closes }),
      }));
  }

  private getDayString(dayNumeric: number): string {
    return this.daysOfTheWeek[dayNumeric - 1];
  }
}
