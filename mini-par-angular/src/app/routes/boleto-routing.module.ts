import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletoReadComponent } from '../components/crud-boleto/boleto-read/boleto-read.component';
import { BoletoCreateComponent } from '../components/crud-boleto/boleto-create/boleto-create.component';
import { BoletoUpdateComponent } from '../components/crud-boleto/boleto-update/boleto-update.component';
import { BoletoDeleteComponent } from '../components/crud-boleto/boleto-delete/boleto-delete.component';

const routes : Routes = [
  { path: 'boletos', component: BoletoReadComponent },
  { path: 'boletos/novo', component: BoletoCreateComponent },
  { path: 'boletos/editar/:id', component: BoletoUpdateComponent },
  { path: 'boletos/deletar/:id', component: BoletoDeleteComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletoRoutingModule { }
