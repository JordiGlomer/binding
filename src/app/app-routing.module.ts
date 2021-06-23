import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';

const loadBindingModule = async()=>{}

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'binding', component: BindingComponent},
  {path: 'interpolacion', component:InterpolacionComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
