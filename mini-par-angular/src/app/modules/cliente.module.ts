import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteCreateComponent } from '../components/crud-cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from '../components/crud-cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from '../components/crud-cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from '../components/crud-cliente/cliente-delete/cliente-delete.component';
import { ClienteRoutingModule } from '../routes/cliente-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class ClienteModule { }
