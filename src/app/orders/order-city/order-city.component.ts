import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeliveryOrder } from '../../model/deliveryOrder';
import { Subscription } from 'rxjs';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'sv-order-city',
  templateUrl: './order-city.component.html',
  styleUrl: './order-city.component.css'
})
export class OrderCityComponent implements OnInit, OnDestroy {



  orders: DeliveryOrder[] = [];
  city: string = "all"
  private ordersSubscription: Subscription = new Subscription();
 
   constructor(private orderService: OrderService) {}


  ngOnInit(): void {
    this.ordersSubscription = 
  this.orderService.getIndexOrder(this.city).subscribe(
     data => {
        this.orders = data;
      },
      err => console.log(err)
    );
  }


  searchByCity() {
    if(this.city && this.city!=="all"){
      this.ordersSubscription = 
      this.orderService.getIndexOrder(this.city).subscribe(
         data => {
            this.orders = data;
            console.log(this.orders);
          },
          
          err => console.log(err)
        );
    }
    
    }

  
  ngOnDestroy(): void {
    if (this.ordersSubscription) {
      this.ordersSubscription.unsubscribe();
    }
  }
}
