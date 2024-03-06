import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftbarComponent } from './core/leftbar/leftbar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { PriceRangeComponent } from './restaurants/price-range/price-range.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    PaginationComponent,
    PriceRangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
