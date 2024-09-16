import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryOrder } from '../model/deliveryOrder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiURL = 'https://apimocha.com/vsvdev/orders';
  constructor(private http: HttpClient) { }


 public getOrdersList(): Observable<DeliveryOrder[]> {
    return this.http.get<DeliveryOrder[]>(this.apiURL);
  }


  public getOrderByMail(email: string): Observable<DeliveryOrder> {
    return this.http
      .get<DeliveryOrder>(this.apiURL + '/' + email);
  }

  public getIndexOrder(city: string): Observable<DeliveryOrder[]> {
    return this.http
      .get<DeliveryOrder[]>(this.apiURL + '?' + 'city=' + city);
  }

  public createOrder(order: DeliveryOrder): Observable<DeliveryOrder> {
    return this.http.post<DeliveryOrder>(this.apiURL, order);
  }

  public  updateOrder(order:DeliveryOrder): Observable<DeliveryOrder> {
    return this.http
      .put<DeliveryOrder>(this.apiURL + '/' + order.email, order);
  }

  public deleteOrder(email: string) {
    return this.http
      .delete<DeliveryOrder>(this.apiURL + '/' + email);
  }

}
