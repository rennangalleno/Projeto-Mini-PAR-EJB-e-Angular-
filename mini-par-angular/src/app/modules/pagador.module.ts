import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { PagadorRoutingModule } from '../routes/pagador-routing.module';
import { PagadorCreateComponent } from '../components/crud-pagador/pagador-create/pagador-create.component';
import { PagadorReadComponent } from '../components/crud-pagador/pagador-read/pagador-read.component';
import { PagadorUpdateComponent } from '../components/crud-pagador/pagador-update/pagador-update.component';
import { SharedModule } from './shared.module';
import { PagadorDeleteComponent } from '../components/crud-pagador/pagador-delete/pagador-delete.component';

@NgModule({
  declarations: [
    PagadorCreateComponent,
    PagadorReadComponent,
    PagadorUpdateComponent,
    PagadorDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagadorRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class PagadorModule { }
