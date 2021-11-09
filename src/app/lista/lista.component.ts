import { Component, OnInit } from '@angular/core';
import { ListaPapoCast } from './lista.const';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  urlImg = '';
  subTittle = '';
  description = ``;
  date ='';
  duration = '';
  list = ListaPapoCast;
  titleList = 'Todos os episódios';
  titleCast= 'Detalhe PapoCast'
  titleDefault ='Últimos lançamentos'
  enabled = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  changeItem(item:ListaPapoCast) {
    this.enabled = false;
    this.urlImg = item.urlImg;
    this.subTittle = item.subTittle;
    this.description = item.description;
    this.date = item.date;
    this.duration = item.duration;
    
  }
  voltar(){
    this.enabled = true;
  }

}
