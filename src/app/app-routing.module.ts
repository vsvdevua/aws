import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderUpdateComponent } from './orders/order-update/order-update.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderCityComponent } from './orders/order-city/order-city.component';

const routes: Routes = [
  {path: '', component: OrderListComponent},
  {path: 'create', component: OrderCreateComponent},
  { path: 'update/:email', component: OrderUpdateComponent},
  { path: 'city', component: OrderCityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
