import { Component, OnInit } from '@angular/core';
import { CartaoService } from 'src/app/services/cartao.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Router } from '@angular/router';
import { Cartao } from 'src/app/models/cartao';
import { Bandeira } from 'src/app/models/bandeira';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './cartao-read.component.html',
  styleUrls: ['./cartao-read.component.css']
})
export class CartaoReadComponent implements OnInit {

  cartoes:Cartao[];
  bandeiraCombo: Bandeira[];
  clienteCombo: Cliente[];
  pesquisarForm: FormGroup;
  
  constructor(
    private cartaoService:CartaoService,
    private clienteService:ClienteService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    
    this.cartaoService.read().subscribe((cartoes)=>{
      this.cartoes = cartoes;
      console.log(cartoes);
    });
    this.cartaoService.readBandeira().subscribe((bandeiras)=>{
      this.bandeiraCombo = bandeiras;
    });
    this.clienteService.read().subscribe((clientes)=>{
      this.clienteCombo = clientes;
    });
  }

  createForm():void{
    this.pesquisarForm = this.formBuilder.group({
      bandeira: [""],
      cliente: [""]
    });
  }

  buscarCartoes():void{
    let clienteId = this.pesquisarForm.value.cliente;
    let bandeiraId = this.pesquisarForm.value.bandeira;
    this.cartaoService.readByParams(clienteId, bandeiraId).subscribe((cartoes)=>{
      this.cartoes = cartoes;
    });
  }

}
