import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagadorCreateComponent } from '../components/crud-pagador/pagador-create/pagador-create.component';
import { PagadorReadComponent } from '../components/crud-pagador/pagador-read/pagador-read.component';
import { PagadorUpdateComponent } from '../components/crud-pagador/pagador-update/pagador-update.component';
import { PagadorDeleteComponent } from '../components/crud-pagador/pagador-delete/pagador-delete.component';

const routes: Routes = [
  { path: 'pagadores', component: PagadorReadComponent },
  { path: 'pagadores/novo', component: PagadorCreateComponent },
  { path: 'pagadores/editar/:id', component: PagadorUpdateComponent },
  { path: 'pagadores/deletar/:id', component: PagadorDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagadorRoutingModule { }