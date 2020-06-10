import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from '../components/agenda-financeira/cliente/cliente.component';
import { RecebiveisComponent } from '../components/agenda-financeira/recebiveis/recebiveis.component';

const routes:Routes = [
  { path: 'agenda', component:ClienteComponent },
  { path: 'agenda/recebiveis/:id', component:RecebiveisComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class AgendaFinanceiraRoutingModule { }
