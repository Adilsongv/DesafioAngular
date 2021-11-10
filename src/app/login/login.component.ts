import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal, { SweetAlertShowClass } from 'sweetalert2'; 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tittle: string = "Faça Login";

  senha="12345";
  email="adilsongv@gmail.com";
  Senha =  document.getElementById("idEmail") ;
  Email = document.getElementById("idEmail");
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  AbrirCadastro(){
    this.router.navigate(['/cadastro']);
    
  }

  logar(){
        if(this.Senha == null && this.Email == null){
          Bemvindo()
        this.router.navigate(['/lista']);
    }
    else{
        simpleAlert();
  }

  function simpleAlert() {
  Swal.fire("Usuario ou Senha invalida!");
  }
  function Bemvindo() {
    Swal.fire("Bem vindo ao Papo Cast!");
    }
}
}
