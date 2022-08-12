import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  listProducts:Product [] = []
  searchProduct:any=""

  constructor(private ProductService:ProductService ) { }

  ngOnInit(): void {
  }
  loadData(){
    this.listProducts = this.ProductService.get()
    console.log(this.searchProduct)
  }
  getSearchProduct(){
    
    this.loadData()
    
    if (this.searchProduct != "") {
      this.listProducts = this.listProducts.filter(item=>item.name.toLocaleUpperCase().includes(this.searchProduct.toLocaleUpperCase()))
    }
    else{
      this.listProducts = []
    }
  }
  
  
    
  
}
