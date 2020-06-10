import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaRoutingModule } from '../routes/conta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { ContaReadComponent } from '../components/conta/conta-read/conta-read.component';



@NgModule({
  declarations: [
    ContaReadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContaRoutingModule,
    SharedModule
  ]
})
export class ContaModule { }
