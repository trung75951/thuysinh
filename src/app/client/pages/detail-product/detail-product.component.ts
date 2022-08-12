import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  productTarget:Product = new Product();
  constructor(private router:ActivatedRoute,private ProductService:ProductService,private ShoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    // alert(this.router.snapshot.paramMap.get('id'))
    this.loadData()
  }
  loadData(){
    var index:any = this.router.snapshot.paramMap.get('id')
    this.productTarget = this.ProductService.get()[index-1]
  }
  AddCart(Product:Product){
    const CartItem  =  new Cart()
    CartItem.id = Product.id
    CartItem.name = Product.name
    CartItem.price = Product.price
    CartItem.image = Product.image
    CartItem.quality = 1
    this.ShoppingCart.addCart(CartItem)
  }
}
