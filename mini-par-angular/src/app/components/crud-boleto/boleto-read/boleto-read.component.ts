import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/models/boleto';
import { BoletoService } from 'src/app/services/boleto.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { PagadorService } from 'src/app/services/pagador.service';
import { Pagador } from 'src/app/models/pagador';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './boleto-read.component.html',
  styleUrls: ['./boleto-read.component.css']
})
export class BoletoReadComponent implements OnInit {

  boletos:Boleto[];
  clienteCombo:Cliente[];
  pagadorCombo:Pagador[];
  pesquisaForm:FormGroup;

  constructor(
    private boletoService:BoletoService,
    private clienteService:ClienteService,
    private pagadorService:PagadorService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

    this.clienteService.read().subscribe((clientes) => {
      this.clienteCombo = clientes;
    });

    this.pagadorService.read().subscribe((pagadores) => {
      this.pagadorCombo = pagadores;
    });
    
    this.boletoService.read().subscribe((boletos)=>{
      this.boletos = boletos;
    });
  }

  createForm():void{
    this.pesquisaForm = this.formBuilder.group({
      pagador:[""],
      cliente:[""]
    });
  }

  buscarBoleto():void{
    let pagadorId = this.pesquisaForm.value.pagador;
    let clienteId = this.pesquisaForm.value.cliente;
    this.boletoService.readByParams(pagadorId, clienteId).subscribe((boletos)=>{
      this.boletos = boletos;
    })
  }
}
