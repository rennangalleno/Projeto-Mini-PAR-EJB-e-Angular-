import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteReadComponent } from '../components/crud-cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from '../components/crud-cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from '../components/crud-cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from '../components/crud-cliente/cliente-delete/cliente-delete.component';

const routes: Routes= [
  { path: 'clientes', component: ClienteReadComponent },
  { path: 'clientes/novo', component: ClienteCreateComponent },
  { path: 'clientes/editar/:id', component: ClienteUpdateComponent },
  { path: 'clientes/deletar/:id', component: ClienteDeleteComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class ClienteRoutingModule { }
