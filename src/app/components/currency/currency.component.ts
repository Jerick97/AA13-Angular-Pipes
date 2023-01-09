import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currency !: number;
  selectedOption : string = "";
  monedaElegida !: string;
  constructor() { }

  ngOnInit(): void {
  }

  capturarSelect(){
    this.monedaElegida = this.selectedOption;
  }
}
