import { Component, OnInit } from '@angular/core';
import { ListaPapoCast } from './lista.conts';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  CompShow = "";
  urlImg = '';
  subTittle = '';
  description = ``;
  list = ListaPapoCast;
  constructor() { }

  ngOnInit(): void {
    
  }
  card01(){
    this.CompShow = "card01"
  }
  changeItem(item:ListaPapoCast) {
    this.urlImg = item.urlImg;
    this.subTittle = item.subTittle;
    this.description = item.description;
  }

}
