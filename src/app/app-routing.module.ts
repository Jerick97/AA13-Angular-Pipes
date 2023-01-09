import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';
import { HomeComponent } from './pages/home/home.component';
import { JsonPagesComponent } from './pages/json-pages/json-pages.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'currency',component:CurrencyPageComponent},
  {path:'json',component:JsonPagesComponent},
  // cualquier url redirigir a Home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
