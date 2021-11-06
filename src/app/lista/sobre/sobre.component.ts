import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  title_lista = "Todos os episódios";
  

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
