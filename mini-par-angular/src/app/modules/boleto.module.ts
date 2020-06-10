import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoletoCreateComponent } from '../components/crud-boleto/boleto-create/boleto-create.component';
import { BoletoReadComponent } from '../components/crud-boleto/boleto-read/boleto-read.component';
import { BoletoUpdateComponent } from '../components/crud-boleto/boleto-update/boleto-update.component';
import { BoletoDeleteComponent } from '../components/crud-boleto/boleto-delete/boleto-delete.component';
import { BoletoRoutingModule } from '../routes/boleto-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    BoletoCreateComponent,
    BoletoReadComponent,
    BoletoUpdateComponent,
    BoletoDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoletoRoutingModule,
    SharedModule
  ]
})
export class BoletoModule { }
