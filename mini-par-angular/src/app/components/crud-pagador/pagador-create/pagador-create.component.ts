import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Pagador } from 'src/app/models/pagador';
import { PagadorService } from '../../../services/pagador.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  templateUrl: './pagador-create.component.html',
  styleUrls: ['./pagador-create.component.css']
})
export class PagadorCreateComponent implements OnInit{

  pagadorForm:FormGroup;

  constructor(
    private pagadorService: PagadorService,
    private formBuilder:FormBuilder,
    private router: Router,
    private showMessageService:ShowMessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm():void{
    this.pagadorForm = this.formBuilder.group({
      cpf:[null, Validators.required],
      nome:[null, Validators.required],
      email:[null, Validators.required],
      dataNascimento:[null, Validators.required]
    });
  }

  criarPagador(): void {
    const pagador = this.pagadorForm.getRawValue() as Pagador;
    this.pagadorService.create(pagador).subscribe(()=>{
      this.showMessageService.showMessage("Pagador cadastrado com sucesso!");
      this.router.navigate(['/pagadores']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/pagadores']);
  }

  verificaValidTouched(field){  
    return !this.pagadorForm.get(field).valid && this.pagadorForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }
}