import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProducts:Product [] = [
    new Product(1,"Ráy nana japan loại cây thủy sinh đẹp dễ chăm sóc",50000,"1.jpg"),
    new Product(2,"Cây thủy sinh Thanh Đản Hồng",35000,"2.jpg"),
    new Product(3,"Thanh Đản dòng cây thủy sinh dễ trồng không cần co2",25000,"3.jpg"),
    new Product(4,"Cây thủy sinh dương xỉ Mỹ Nhân",60000,"4.jpg"),
    new Product(5,"Láng Xoắn cây thủy sinh điểm bố cục hoặc trồng hậu cảnh và trung cảnh",220000,"5.jpg"),
    new Product(6,"Cây thủy sinh Chang Chuối dòng cây điểm bố cục hồ thủy sinh tuyệt đẹp",60000,"6.jpg"),
   
  ]
  constructor() { }
  get(){
    return this.listProducts
  }
}
