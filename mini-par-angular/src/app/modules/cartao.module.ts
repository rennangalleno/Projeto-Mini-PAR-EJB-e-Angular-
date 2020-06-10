import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartaoCreateComponent } from '../components/crud-cartao/cartao-create/cartao-create.component';
import { CartaoReadComponent } from '../components/crud-cartao/cartao-read/cartao-read.component';
import { CartaoUpdateComponent } from '../components/crud-cartao/cartao-update/cartao-update.component';
import { CartaoDeleteComponent } from '../components/crud-cartao/cartao-delete/cartao-delete.component';
import { CartaoRoutingModule } from '../routes/cartao-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    CartaoCreateComponent,
    CartaoReadComponent,
    CartaoUpdateComponent,
    CartaoDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartaoRoutingModule,
    SharedModule
  ]
})
export class CartaoModule { }
