import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeliveryOrder } from '../../model/deliveryOrder';
import { OrderService } from '../../service/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sv-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit, OnDestroy {


  orders: DeliveryOrder[] = [];
  email:string = '';
 private ordersSubscription: Subscription = new Subscription();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.ordersSubscription = 
  this.orderService.getOrdersList().subscribe(
     data => {
        this.orders = data;
      },
      err => console.log(err)
    );
  }


  onDelete(email: string): void {
    this.orderService.deleteOrder(email);
  }

  searchByEmail() {
    if(this.email && this.email!==""){
      this.ordersSubscription = 
      this.orderService.getOrderByMail(this.email).subscribe(
         data => {
            this.orders = [];
            this.orders.push(data);
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
