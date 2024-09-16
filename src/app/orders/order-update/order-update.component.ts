import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeliveryOrder } from '../../model/deliveryOrder';
import { Cities } from '../../model/cities';
import { Status } from '../../model/status';
import { Subscription } from 'rxjs';
import { OrderService } from '../../service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { validator } from '../../model/validator';

@Component({
  selector: 'sv-order-update',
  templateUrl: './order-update.component.html',
  styleUrl: './order-update.component.css'
})
export class OrderUpdateComponent implements OnInit,OnDestroy {
  
 email: string = '';
 order: DeliveryOrder = new DeliveryOrder("","","","","",1,"","","");
 submitted = false;
 cities = Object.values(Cities);
 statuses = Object.values(Status);
 messages:string[]=[];
 private ordersSubscription: Subscription = new Subscription();
 
 constructor(private route: ActivatedRoute, private orderService: OrderService,
  private router: Router) { }
 
  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    this.ordersSubscription = this.orderService.getOrderByMail(this.email)
    .subscribe(data => {
      console.log(data)
      this.order = data;
    }, error => console.log(error));
  }
  
  
  
  onSubmit() {
    this.submitted = true;
    
    this.messages = validator(this.order);
    if(this.messages.length === 0){
     this.ordersSubscription = this.orderService.updateOrder(this.order)
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
