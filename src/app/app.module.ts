import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolacionComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
