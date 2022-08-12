import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { sortBy } from 'sort-by-typescript';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProducts:Product[]=[]
  PriceFilter:String="macdinh"
  constructor(private productServices:ProductService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadDataListProduct()
  }
  
  loadDataListProduct(){
    this.listProducts=this.productServices.get()
    console.log(this.listProducts)
  }
  sortProduct(){
    this.loadDataListProduct()
    if(this.PriceFilter=="tangdan"){
      for(let i = 0;i<this.listProducts.length-1;i++){
        for(let j = i+1;j<this.listProducts.length;j++){
          if(this.listProducts[i].price>this.listProducts[j].price){
            const tmp= this.listProducts[i];
            this.listProducts[i]=this.listProducts[j]
            this.listProducts[j]=tmp
          }

        }
      }
      console.log(this.listProducts)

    }
    if(this.PriceFilter=="giamdan"){
      for(let i = 0;i<this.listProducts.length-1;i++){
        for(let j = i+1;j<this.listProducts.length;j++){
          if(this.listProducts[i].price<this.listProducts[j].price){
            const tmp= this.listProducts[i];
            this.listProducts[i]=this.listProducts[j]
            this.listProducts[j]=tmp
          }

        }
      }

    }
  }
}
