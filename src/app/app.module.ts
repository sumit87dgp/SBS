import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { LoginComponent } from './component/login/login.component';
import { AdditemstoinventoryComponent } from './component/additemstoinventory/additemstoinventory.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminHomeComponent,
    LoginComponent,
    AdditemstoinventoryComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
