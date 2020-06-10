import { Component, OnInit, ViewChild } from '@angular/core';

import { PagadorService } from '../../../services/pagador.service';
import { Pagador } from 'src/app/models/pagador';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './pagador-read.component.html',
  styleUrls: ['./pagador-read.component.css']
})
export class PagadorReadComponent implements OnInit {

  pagadores: Pagador[];
  pesquisarForm: FormGroup;

  constructor(
    private pagadorService:PagadorService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.pagadorService.read().subscribe(pagadores=>{
      this.pagadores = pagadores });
  }

  createForm():void{
    this.pesquisarForm = this.formBuilder.group({
      cpf: [""],
      nome: [""]
    });
  }

  buscarPagador():void{
    let cpf = this.pesquisarForm.value.cpf;
    let nome = this.pesquisarForm.value.nome;
    this.pagadorService.readByParam(cpf, nome).subscribe(pagadores=>{
      this.pagadores = pagadores});
  }
}
