import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { CartProductComponent } from './pages/cart-product/cart-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    AboutComponent,
    HomeComponent,
    ListProductComponent,
    DetailProductComponent,
    CartProductComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
