import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderUpdateComponent } from './orders/order-update/order-update.component';
import { OrderCityComponent } from './orders/order-city/order-city.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderUpdateComponent,
    OrderCityComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule, //!!!! Define
   FormsModule, // !!!! Define
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
