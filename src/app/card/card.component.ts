import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() titleCast? = 'Detalhe PapoCast';
  @Input() urlImg? = 'assets/back.png';
  @Input() subTittle? = 'Python: Por onde começar?';
  @Input() description? = `Uma introdução ao conhecimento e cotidiano dessa linguagem, com aprofundamento do básico ao
  avançado, trazendo a visão prática da utilização da linguagem de forma simples e dinâmica .`;
  constructor() { }

  ngOnInit(): void {
  }

}
