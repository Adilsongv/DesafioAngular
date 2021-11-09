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

  Senha = document.getElementById("idSenha");
  email = document.getElementById("idEmail");
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  AbrirCadastro(){
    this.router.navigate(['/cadastro']);
    
  }

  logar(){
    if(!this.Senha  && !this.email){
        this.router.navigate(['/lista']);
    }
    else{
        simpleAlert();
  }

  function simpleAlert() {
  Swal.fire("Usuario ou Senha invalida!");
  }
}
}
