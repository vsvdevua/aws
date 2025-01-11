import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeliveryOrder } from '../../model/deliveryOrder';
import { OrderService } from '../../service/order.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'sv-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit, OnDestroy {


  orders: DeliveryOrder[] = [];
  email:string = '';
 private ordersSubscription: Subscription = new Subscription();
 groups:string[] =[];

  constructor(private orderService: OrderService, private auth:AuthService) {}

  ngOnInit(): void {
    this.groups = this.auth.groups;
    if(this.groups.length==1 && this.groups.includes('USER')){
    this,this.email =  this.auth.email;
      this.ordersSubscription = 
      this.orderService.getOrderByMail(this.email).subscribe(
         data => {
            this.orders.push(data);
       //     console.log(this.orders);
          },
          err => console.log(err)
        );
    }else{
      this.ordersSubscription = 
      this.orderService.getOrdersList().subscribe(
         data => {
            this.orders = data;
       //     console.log(this.orders);
          },
          err => console.log(err)
        );
    }
  
  }


  onDelete(email: string): void {
   // this.orderService.deleteOrder(email);
   this.orderService.deleteOrder(email).subscribe(
    response => {
        //console.log('Order deleted:', response);
        // Optionally, remove the order from the local list after successful deletion
        this.orders = this.orders.filter(order => order.email !== email);
    },
    error => {
        console.error('Error deleting order:', error);
    }
);
  }

  searchByEmail() {
    if(this.email && this.email!==""){
      this.ordersSubscription = 
      this.orderService.getOrderByMail(this.email).subscribe(
         data => {
            this.orders = [];
            this.orders.push(data);
          //  console.log(this.orders);
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

  hasRequiredRoles(): boolean {
    return this.groups.some(group => group === 'ADMIN') || this.groups.some(group => group === 'CONSULTANT');
  }
}
