import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TipoRecebivel } from 'src/app/models/tipoRecebivel';
import { Bandeira } from 'src/app/models/bandeira';
import { Pagador } from 'src/app/models/pagador';
import { Cheque } from 'src/app/models/cheque';
import { Boleto } from 'src/app/models/boleto';
import { Cartao } from 'src/app/models/cartao';
import { AgendaService } from 'src/app/services/agenda.service';
import { CartaoService } from 'src/app/services/cartao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { PagadorService } from 'src/app/services/pagador.service';

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.component.html',
  styleUrls: ['./recebiveis.component.css']
})
export class RecebiveisComponent implements OnInit {

  pesquisarForm: FormGroup;
  tipoCombo: TipoRecebivel[];
  bandeiraCombo: Bandeira[];
  pagadorCombo: Pagador[];
  cheques: Cheque[];
  boletos: Boleto[];
  cartoes: Cartao[];
  cliente: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    private agendaService: AgendaService,
    private clienteService: ClienteService,
    private cartaoService: CartaoService,
    private pagadorService: PagadorService,
    private router: Router,
    private activeRoutes: ActivatedRoute) { }

  ngOnInit(): void {

    this.createForm();

    const clienteId = +this.activeRoutes.snapshot.paramMap.get('id');

    this.agendaService.readTipos().subscribe((tipos) => {
      this.tipoCombo = tipos;
    });
    this.cartaoService.readBandeira().subscribe((bandeiras) => {
      this.bandeiraCombo = bandeiras;
    });
    this.pagadorService.read().subscribe((pagadores) => {
      this.pagadorCombo = pagadores;
    });

    this.agendaService.readCheques(clienteId).subscribe((cheques) => {
      this.cheques = cheques;
    });
    this.agendaService.readBoletos(clienteId).subscribe((boletos) => {
      this.boletos = boletos;
    });
    this.agendaService.readCartoes(clienteId).subscribe((cartoes) => {
      this.cartoes = cartoes;
    });

    this.clienteService.readById(clienteId).subscribe((cliente) => {
      this.cliente = cliente; 
      this.updateForm()
    });
  }

  createForm(): void {
    this.pesquisarForm = this.formBuilder.group({
      cpf: [""],
      nome: [""],
      conta: [""],
      tipo: [""],
      pagador: [""],
      bandeira: [""]
    });
  }

  updateForm():void {
    this.pesquisarForm.setValue({
      cpf: this.cliente.cpf,
      nome: this.cliente.nome,
      conta: this.cliente.conta.numero,
      tipo: "",
      pagador: "",
      bandeira: "",
    });
  }

  buscarRecebiveis():void{
    let tipoId = this.pesquisarForm.value.tipo;
    let pagadorId = this.pesquisarForm.value.pagador;
    let bandeiraId = this.pesquisarForm.value.bandeira;
    let clienteId = this.cliente.id;

    this.agendaService.readParamsCheques(clienteId, tipoId, pagadorId).subscribe((cheques)=>{
      this.cheques = cheques;
    });

    this.agendaService.readParamsBoletos(clienteId, tipoId, pagadorId).subscribe((boletos)=>{
      this.boletos = boletos;
    });

    this.agendaService.readParamsCartoes(clienteId, tipoId, bandeiraId).subscribe((cartoes)=>{
      this.cartoes = cartoes;
    });
  }
}
