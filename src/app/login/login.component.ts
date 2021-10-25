import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tittle: string = "Faça Login";
  
  constructor(
    private router: Router
) { }

  ngOnInit(): void {
  }

  AbrirCadastro(){
    this.router.navigate(['/cadastro']);
  }

}
