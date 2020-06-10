import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChequeReadComponent } from '../components/crud-cheque/cheque-read/cheque-read.component';
import { ChequeCreateComponent } from '../components/crud-cheque/cheque-create/cheque-create.component';
import { ChequeUpdateComponent } from '../components/crud-cheque/cheque-update/cheque-update.component';
import { ChequeDeleteComponent } from '../components/crud-cheque/cheque-delete/cheque-delete.component';

const routes: Routes = [
  { path: 'cheques', component: ChequeReadComponent },
  { path: 'cheques/novo', component: ChequeCreateComponent},
  { path: 'cheques/editar/:id', component: ChequeUpdateComponent },
  { path: 'cheques/deletar/:id', component: ChequeDeleteComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ChequeRoutingModule { }
