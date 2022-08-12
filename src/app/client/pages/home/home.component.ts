import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listProducts:Product[]=[]
  constructor(private productServices:ProductService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.listProducts = this.productServices.get()
  }
}
