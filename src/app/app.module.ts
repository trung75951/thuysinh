import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { GuestModule } from './guest/guest.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ClientModule,
    ReactiveFormsModule,
    GuestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
