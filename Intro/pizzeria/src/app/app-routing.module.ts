import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaFormComponent } from './pizza/pizza-form/pizza-form.component';

const routes: Routes = [
  { path: 'pizzas', component: PizzaListComponent },
  { path: 'pizzas/add', component: PizzaFormComponent },
  { path: 'pizzas/:id', component: PizzaFormComponent },
  { path: '', redirectTo: '/pizzas', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
