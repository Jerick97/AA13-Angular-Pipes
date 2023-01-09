import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name !: string;
  currency !: number;
  selectedOption !: string;
  monedaElegida !: string;
  constructor() { }

  ngOnInit(): void {

  }
  capturarSelect(){
    this.monedaElegida = this.selectedOption;
  }
}
