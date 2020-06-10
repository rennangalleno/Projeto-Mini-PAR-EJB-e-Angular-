import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import localept from '@angular/common/locales/pt';
registerLocaleData(localept, 'pt');

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './templates/footer/footer.component';

import { PagadorModule } from './modules/pagador.module';
import { ClienteModule } from './modules/cliente.module';
import { BoletoModule } from './modules/boleto.module';
import { ChequeModule } from './modules/cheque.module';
import { CartaoModule } from './modules/cartao.module';
import { registerLocaleData } from '@angular/common';
import { AgendaFinanceiraModule } from './modules/agenda-financeira.module';
import { ContaModule } from './modules/conta.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    PagadorModule,
    ClienteModule,
    ChequeModule,
    BoletoModule,
    CartaoModule,
    AgendaFinanceiraModule,
    ContaModule,
    AppRoutingModule   
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
