import { Component, OnInit, OnChanges } from '@angular/core';
import { Cheque } from 'src/app/models/cheque';
import { ChequeService } from 'src/app/services/cheque.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Cliente } from 'src/app/models/cliente';
import { Pagador } from 'src/app/models/pagador';
import { ClienteService } from 'src/app/services/cliente.service';
import { PagadorService } from 'src/app/services/pagador.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './cheque-read.component.html',
  styleUrls: ['./cheque-read.component.css']
})
export class ChequeReadComponent implements OnInit {

  cheques: Cheque[];
  clienteCombo: Cliente[];
  pagadorCombo: Pagador[];
  pesquisaForm: FormGroup; 

  constructor(
    private chequeService: ChequeService,
    private clienteService: ClienteService,
    private pagadorService: PagadorService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

    this.clienteService.read().subscribe((clientes) => {
      this.clienteCombo = clientes;
    });

    this.pagadorService.read().subscribe((pagadores) => {
      this.pagadorCombo = pagadores;
    });

    this.chequeService.read().subscribe((cheques) => {
      this.cheques = cheques;
    });
  }

  createForm():void{
    this.pesquisaForm = this.formBuilder.group({
      pagador:[""],
      cliente:[""]
    });
  }

  pesquisarCheque() :void{
    let pagadorId = this.pesquisaForm.value.pagador;
    let clienteId = this.pesquisaForm.value.cliente;
    this.chequeService.readByParam(pagadorId, clienteId).subscribe((cheques)=>{
      this.cheques = cheques;
    });
  }
}
