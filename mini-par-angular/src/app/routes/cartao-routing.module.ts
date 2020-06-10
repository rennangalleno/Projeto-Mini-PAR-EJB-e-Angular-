import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoReadComponent } from '../components/crud-cartao/cartao-read/cartao-read.component';
import { CartaoCreateComponent } from '../components/crud-cartao/cartao-create/cartao-create.component';
import { CartaoUpdateComponent } from '../components/crud-cartao/cartao-update/cartao-update.component';
import { CartaoDeleteComponent } from '../components/crud-cartao/cartao-delete/cartao-delete.component';

const routes : Routes = [
  { path: 'cartoes', component: CartaoReadComponent },
  { path: 'cartoes/novo', component: CartaoCreateComponent },
  { path: 'cartoes/editar/:id', component: CartaoUpdateComponent },
  { path: 'cartoes/deletar/:id', component: CartaoDeleteComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaoRoutingModule { }
