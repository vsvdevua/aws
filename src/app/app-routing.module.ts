import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderUpdateComponent } from './orders/order-update/order-update.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderCityComponent } from './orders/order-city/order-city.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AguardService } from './service/aguard.service';


const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'orders', component: OrderListComponent, canActivate: [AguardService], data: { groups: ['ADMIN', 'CONSULTANT','DELIVER', 'USER'] }},
{ path: 'orders/create', component: OrderCreateComponent, canActivate: [AguardService], data: { groups: ['ADMIN','CONSULTANT', 'USER'] }},
{ path: 'update/:email', component: OrderUpdateComponent, canActivate: [AguardService], data: { groups: ['ADMIN','CONSULTANT','DELIVER'] }},
{ path: 'city', component: OrderCityComponent, canActivate: [AguardService], data: { groups: ['ADMIN', 'CONSULTANT','DELIVER'] }},
{ path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
