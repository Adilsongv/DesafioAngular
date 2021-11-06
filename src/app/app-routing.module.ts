import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ListaComponent } from './lista/lista.component';
import { SobreComponent } from './lista/sobre/sobre.component';
import { Card01Component } from './card01/card01.component';
import { Card02Component } from './card02/card02.component';
import { Card03Component } from './card03/card03.component';
import { Card04Component } from './card04/card04.component';
import { Card05Component } from './card05/card05.component';
import { Card06Component } from './card06/card06.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'lista', component:ListaComponent},
  { path: 'sobre', component:SobreComponent},
  { path: 'card01', component:Card01Component},
  { path: 'card02', component:Card02Component},
  { path: 'card03', component:Card03Component},
  { path: 'card04', component:Card04Component},
  { path: 'card05', component:Card05Component},
  { path: 'card06', component:Card06Component},

  ];

@NgModule({
  
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
