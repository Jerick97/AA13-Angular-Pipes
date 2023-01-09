import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { CurrencyPageComponent } from './currency-page/currency-page.component';
import { JsonPagesComponent } from './json-pages/json-pages.component';



@NgModule({
  declarations: [
    HomeComponent,
    CurrencyPageComponent,
    JsonPagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    CurrencyPageComponent,
    JsonPagesComponent
  ]
})
export class PagesModule { }
