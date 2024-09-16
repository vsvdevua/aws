export class DeliveryOrder {
    email: string;
    name?: string;
    city: string;
    address?: string;
    phone?: string;
    quantity?: number;
    deliveryDate?: string;
    status?: string;
    notes?: string;
    
    constructor(email:string, city:string, name?: string, address?: string, phone?: string,
        quantity?: number, deliveryDate?: string, status?: string, notes?: string){
        this.email = email;
        this.city = city;
        if(name){
            this.name = name;
        }
        if(address){
            this.address = address;
        }
        if(phone){
            this.phone = phone;
        }
        if(quantity){
            this.quantity = quantity;
        }
        if(deliveryDate){
            this.deliveryDate = deliveryDate;
        }
        if(status){
            this.status = status;
        }
        if(notes){
            this.notes = notes;
        }
    }
    
}