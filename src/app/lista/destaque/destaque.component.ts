import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  destaque:string = "Ultimos lançamentos";

  constructor() { }

  ngOnInit(): void {
  }

}
