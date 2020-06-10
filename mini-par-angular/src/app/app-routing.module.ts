import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'pagadores', loadChildren: './modules/pagador.module#PagadorModule' },
  { path: 'clientes', loadChildren: './modules/cliente.module#ClienteModule' },
  { path: 'cheques', loadChildren: './modules/cheque.module#ChequeModule' },
  { path: 'boletos', loadChildren: './modules/boleto.module#BoletoModule' },
  { path: 'cartoes', loadChildren: './modules/cartao.module#CartaoModule' },
  { path: 'agenda', loadChildren: './modules/agenda-financeira.module#AgendaFinanceiraModule'},
  { path: 'conta', loadChildren: './modules/conta.module#ContaModule'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
