import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  selectedOption : string = "";
  users = [
    {
      "Apellido" : "Arcilla",
      "Casado" : false,
      "Direccion" : "Calle 35 # 43 28",
      "Nombre" : "Diego",
      "Telefono" : 3859720
    },
    {
      "Apellido" : "Bueno",
      "Casado" : false,
      "Direccion" : "CR 16A # 53 28",
      "Nombre" : "Kevin",
      "Telefono" : 31485579954
    },
    {
      "Apellido" : "Palomino",
      "Casado" : false,
      "Direccion" : "CR 25 # 52 33",
      "Nombre" : "Natalia",
      "Telefono" : 32255945555
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }
}
