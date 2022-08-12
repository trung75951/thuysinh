import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path:"admin",
    component:LayoutComponent,
    canActivateChild:[AdminGuard],
    children:[
      {
        path:"",
        redirectTo:"order",
        pathMatch:"full"
      }
      ,{
        path:"order",
        component:OrderComponent
      },
      {
        path:"login",
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
