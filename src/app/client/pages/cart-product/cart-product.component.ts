import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { UserCLient } from 'src/app/model/userClient.model';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  listCart:Cart [] = []
  userclient:UserCLient = new UserCLient
  total:number=0
  constructor(private ShoppingCart:ShoppingCartService, private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
    this.loadData()
    this.subtotal()
  }

  loadData(){
    this.listCart = this.ShoppingCart.getCart()
  }
  subtotal(){
    let total_tmp = 0
    this.listCart.forEach((item)=>{
      total_tmp+=item.price*item.quality
    })
    this.total = total_tmp
  }
  deleteCart(){
    this.listCart.splice(0)
  }
  removeItem(index:number){
    this.listCart.splice(index, 1)
  }
  totalpay(){
    //Kiem tra xem email co ton tai khong
    if (this.authService.checkLoginClient()) {
      alert("Thanh toán thành công")
      this.router.navigate(['/client/listProduct'])
      alert("Bạn có thể lựa chọn tiếp sản phẩm")
    }
    else{
      alert("Chưa có tài khoản, cần đăng nhập trước khi thanh toán")
      this.router.navigate(['/client/login'])

    }
    
  }
  
}
