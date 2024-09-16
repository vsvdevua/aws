import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeliveryOrder } from '../../model/deliveryOrder';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';
import { Cities } from '../../model/cities';
import { Status } from '../../model/status';
import { validator } from '../../model/validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sv-order-create',
  templateUrl: './order-create.component.html',
  styleUrl: './order-create.component.css'
})
export class OrderCreateComponent implements OnDestroy{

 order: DeliveryOrder = new DeliveryOrder("","","","","",1,"","","");
 submitted = false;
 cities = Object.values(Cities);
 statuses = Object.values(Status);
 messages:string[]=[];
 private ordersSubscription: Subscription = new Subscription();
 
 constructor(private orderService: OrderService,
  private router: Router) { }
 

  onSubmit() {
    this.submitted = true;
    this.messages = validator(this.order);
    if(this.messages.length === 0){
     this.ordersSubscription = this.orderService.createOrder(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
      this.order = new DeliveryOrder("","","","","",1,"","","" );
      this.router.navigate(['']);

    }   
  }

  ngOnDestroy(): void {
    if (this.ordersSubscription) {
      this.ordersSubscription.unsubscribe();
    }
  }

  
 
}
