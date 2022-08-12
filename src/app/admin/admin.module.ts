import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    LayoutComponent,
    OrderComponent,
    ProductComponent,
    LoginComponent,
    HighlightDirective,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
