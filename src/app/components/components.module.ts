import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCaseComponent } from './upper-case/upper-case.component';
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule } from '@angular/forms';
import { JsonComponent } from './json/json.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UpperCaseComponent,
    CurrencyComponent,
    JsonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    UpperCaseComponent,
    CurrencyComponent,
    JsonComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
