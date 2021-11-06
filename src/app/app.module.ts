import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//meus componentes

import { CadastroComponent } from './cadastro/cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { DestaqueComponent } from './lista/destaque/destaque.component';
import { SobreComponent } from './lista/sobre/sobre.component';
import { HeaderComponent } from './header/header.component';

// Minhas importações

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { Card01Component } from './card01/card01.component';
import {MatCardModule} from '@angular/material/card';
import { Card02Component } from './card02/card02.component';
import { Card03Component } from './card03/card03.component';
import { Card04Component } from './card04/card04.component';
import { Card05Component } from './card05/card05.component';
import { Card06Component } from './card06/card06.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    ListaComponent,
    DestaqueComponent,
    SobreComponent,
    HeaderComponent,
    Card01Component,
    Card02Component,
    Card03Component,
    Card04Component,
    Card05Component,
    Card06Component,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
