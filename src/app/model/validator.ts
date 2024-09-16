import { DeliveryOrder } from "./deliveryOrder";
import moment from 'moment';

export function validator(order: DeliveryOrder): string[] {

  let messages:string[] = [];
 
  let emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
  if(!order.email || !emailRegex.test(order.email)){
    messages.push("Empty or wrong email address");
  }
  if(!order.city || order.city.length<2){
    messages.push("City can't be empty");
  }
  if(!order.name || order.name && order.name.length<2){
    messages.push("Name can't be empty");
  }
  if(!order.address || order.address && order.address.length<2){
    messages.push("Address can't be empty");
  }

  //(123) 456-7890
//123-456-7890
//123.456.7890
//1234567890
//+1 123-456-7890
  let phoneRegex = /^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  if(!order.phone || order.phone && !phoneRegex.test(order.phone)){
    messages.push("Phone can't be empty or have wrong format");
  }

  
  if(!order.deliveryDate || order.deliveryDate && !validDate(order.deliveryDate)){
    messages.push("The minimum delivary date is 3 days from today");
  }
 
  
  if(!order.status || order.status && order.status.length<2){
    messages.push("Status can't be empty");
  }
    return messages;
}

//npm install moment

function validDate(date: string): boolean {
  let today: Date = new Date();
  let minDate: Date = new Date(today);
  minDate.setDate(today.getDate() + 3);
  
const  validOrderDate= moment(minDate);
const inputDate = moment(date);

  if(inputDate.isBefore(validOrderDate)){
   return false;
  }
    return true;
}
