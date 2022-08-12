import { Customer } from "./customer.models";
import { Product } from "./product.model";

export class ChecKout{
    id:number=0;
    totalAmount:number=0;
    method:string="Tại cửa hàng";
    carts:Product[]=[];
    customer:Customer=new Customer;
    showChild:boolean=false
}