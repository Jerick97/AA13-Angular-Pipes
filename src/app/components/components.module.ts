import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCaseComponent } from './upper-case/upper-case.component';
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpperCaseComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UpperCaseComponent,
    CurrencyComponent
  ]
})
export class ComponentsModule { }
