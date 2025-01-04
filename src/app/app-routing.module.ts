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
  { path: 'orders', component: OrderListComponent},
  { path: 'orders/create', component: OrderCreateComponent},
  { path: 'update/:email', component: OrderUpdateComponent},
  { path: 'city', component: OrderCityComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

//const routes: Routes = [
//  { path: 'home', component: HomeComponent},
 // { path: 'orders', component: OrderListComponent, canActivate: [AguardService]},
// { path: 'create', component: OrderCreateComponent, canActivate: [AguardService]},
//  { path: 'update/:email', component: OrderUpdateComponent, canActivate: [AguardService]},
//  { path: 'city', component: OrderCityComponent, canActivate: [AguardService]},
 // { path: 'login', component: LoginComponent},
 // { path: '', redirectTo: 'home', pathMatch: 'full'}
//];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
