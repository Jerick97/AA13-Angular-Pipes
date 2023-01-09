import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-case',
  templateUrl: './upper-case.component.html',
  styleUrls: ['./upper-case.component.css']
})
export class UpperCaseComponent implements OnInit {
  name !: string;
  constructor() { }

  ngOnInit(): void {
  }

}
