import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes:Cliente[];
  pesquisaForm:FormGroup;

  constructor(
    private clienteService:ClienteService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.clienteService.read().subscribe((clientes)=>{
      this.clientes = clientes;
    })
  }

  createForm():void{
    this.pesquisaForm = this.formBuilder.group({
      cpf:[""],
      nome:[""]
    })
  }

  buscarCliente():void{
    let cpf = this.pesquisaForm.value.cpf;
    let nome = this.pesquisaForm.value.nome;
    this.clienteService.readByParam(cpf, nome).subscribe(clientes=>{
      this.clientes = clientes;
    });
    }
}
