import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:"auth",
    component:LayoutComponent,
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"loginClient",
        component:LoginClientComponent
      },
      {
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
export class GuestRoutingModule { }
