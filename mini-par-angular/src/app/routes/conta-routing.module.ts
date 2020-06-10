import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaReadComponent } from '../components/conta/conta-read/conta-read.component';

const routes:Routes = [
  {path:'conta', component:ContaReadComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
