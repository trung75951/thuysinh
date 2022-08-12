import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginClientComponent } from './pages/login-client/login-client.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    LoginClientComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class GuestModule { }
