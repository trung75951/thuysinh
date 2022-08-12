import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginClientComponent } from '../guest/pages/login-client/login-client.component';
import { RegisterComponent } from '../guest/pages/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './pages/about/about.component';
import { CartProductComponent } from './pages/cart-product/cart-product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';

const routes: Routes = [
  {
    path:"client",
    component:LayoutComponent,
    children:[
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"about",
        component:AboutComponent
      },
      {
        path:"listProduct",
        component:ListProductComponent
      }
      ,{
        path:"detailProduct/:id",
        component:DetailProductComponent
      },
      {
        path:"cartProduct",
        component:CartProductComponent
      },
      {
        path:"login",
        component:LoginClientComponent,
      }
      ,{
        path:"register",
        component:RegisterComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
