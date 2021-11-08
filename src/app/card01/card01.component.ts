import { Component, Input, InputDecorator, OnInit } from '@angular/core';

@Component({
  selector: 'app-card01',
  templateUrl: './card01.component.html',
  styleUrls: ['./card01.component.css']
})


export class Card01Component implements OnInit {

  title_cast = "Detalhe PapoCast";
  constructor() { }

  ngOnInit(): void {
  }

}
