import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryOrder } from '../model/deliveryOrder';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiURL = environment.apiURL;

  header:HttpHeaders;
  token = '';

  constructor(private http: HttpClient, private auth:AuthService) { 
    this.token = auth.accessToken;
    console.log("TOKEN: " + this.token);
    this.header = new HttpHeaders({
      "Content-Type":"application/json",
      Authorization: 'Bearer ' + this.token,});
  }



 public getOrdersList(): Observable<DeliveryOrder[]> {
  //return this.http.get<string>(this.apiURL).pipe(
   // tap(response => console.log('Raw response:', response)),
   // map(response => JSON.parse(response) as DeliveryOrder[])
//);
return this.http.get<DeliveryOrder[]>(this.apiURL,{headers: this.header});
  }


  public getOrderByMail(email: string): Observable<DeliveryOrder> {

    const orderByMail = this.apiURL + '/' + email;
    return this.http
      .get<DeliveryOrder>(orderByMail, {headers: this.header});
  }

  public getIndexOrder(city: string): Observable<DeliveryOrder[]> {
    const indexOrder = this.apiURL + '?' + 'city=' + city;


    return this.http.get<DeliveryOrder[]>(indexOrder,{headers: this.header});
    //.pipe(
    //  tap(response => console.log('Raw response:', response)),
    //  map(response => JSON.parse(response) as DeliveryOrder[])
  //);


  }



 public createOrder(order: DeliveryOrder): Observable<DeliveryOrder> {
 // console.log('Order to create:', order);  // Log the order being sent
 return this.http.post<DeliveryOrder>(this.apiURL, order,{headers: this.header});
  //return this.http.post<DeliveryOrder>(this.apiURL, order).pipe(
   // tap({
     // next: (response) => {
     //   console.log('Response from API:', response);  // Log the successful response
     // },
    //  error: (error) => {
    //    console.error('Error creating order:', error);  // Log any error that occurs
   //   }
  //  }),
  //  catchError((error) => {
  //    console.error('Error creating order:', error);  // Log the error again if needed
  //    throw error;  // Rethrow the error so it can be handled further up if needed
  //  })
 // );
}



  public  updateOrder(order:DeliveryOrder): Observable<DeliveryOrder> {
   // return this.http.post<DeliveryOrder>(this.apiURL, order);
   const updateOrders = `${this.apiURL}/${order.email}`;
   return this.http.put<DeliveryOrder>(updateOrders, order,{headers: this.header});
   //.pipe(
  //  map((response: string) => {
  //      try {
  //          // Parse the JSON string into an object
  //          return JSON.parse(response) as DeliveryOrder;
  //      } catch (error) {
  //          console.error('Error parsing JSON:', error);
  //          throw error;  // Rethrow the error to be handled in the component
 //       }
 //  }),
  //  catchError((error) => {
  //      console.error('Error updating order:', error);
  //      throw error;
  //  })
//);
   }

  public deleteOrder(email: string) {

  return this.http.delete<string>(`${this.apiURL}/${email}`,{headers: this.header}).pipe(
    catchError(error => {
        console.error('Error deleting order:', error);
        throw error;
    })
);
  }

}
