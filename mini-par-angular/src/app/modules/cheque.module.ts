import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChequeCreateComponent } from '../components/crud-cheque/cheque-create/cheque-create.component';
import { ChequeReadComponent } from '../components/crud-cheque/cheque-read/cheque-read.component';
import { ChequeUpdateComponent } from '../components/crud-cheque/cheque-update/cheque-update.component';
import { SharedModule } from './shared.module';
import { ChequeRoutingModule } from '../routes/cheque-routing.module';
import { ChequeDeleteComponent } from '../components/crud-cheque/cheque-delete/cheque-delete.component';

@NgModule({
  declarations: [
    ChequeCreateComponent,
    ChequeReadComponent,
    ChequeUpdateComponent,
    ChequeDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChequeRoutingModule,
    SharedModule
  ]
})
export class ChequeModule { }
