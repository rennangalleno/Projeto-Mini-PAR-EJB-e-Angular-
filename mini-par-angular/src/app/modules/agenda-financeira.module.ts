import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from '../components/agenda-financeira/cliente/cliente.component';
import { AgendaFinanceiraRoutingModule } from '../routes/agenda-financeira-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { RecebiveisComponent } from '../components/agenda-financeira/recebiveis/recebiveis.component';

@NgModule({
  declarations: [
    ClienteComponent,
    RecebiveisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    AgendaFinanceiraRoutingModule,
    SharedModule
  ]
})
export class AgendaFinanceiraModule { }
