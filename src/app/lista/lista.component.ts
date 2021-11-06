import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  CompShow = "";

  constructor() { }

  ngOnInit(): void {
    
  }
  card01(){
    this.CompShow = "card01"
  }

}
