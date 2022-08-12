import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  listCarts:Cart [] = []
  constructor() { }
  getCart(){
    return this.listCarts
  }
  addCart(CartItem:Cart){
    const exist_item = this.listCarts.findIndex(item=>item.id == CartItem.id)
    if(exist_item==-1){
      this.listCarts.push(CartItem)
    }
    else{
      this.listCarts[exist_item].quality++
    }
  }
}
