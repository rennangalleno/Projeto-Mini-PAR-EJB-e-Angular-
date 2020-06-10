import { Component, OnInit } from '@angular/core';
import { Cheque } from 'src/app/models/cheque';
import { Cliente } from 'src/app/models/cliente';
import { Pagador } from 'src/app/models/pagador';
import { ChequeService } from 'src/app/services/cheque.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PagadorService } from 'src/app/services/pagador.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './cheque-create.component.html',
  styleUrls: ['./cheque-create.component.css']
})
export class ChequeCreateComponent implements OnInit {

  chequeForm: FormGroup;
  clienteCombo: Cliente[];
  pagadorCombo: Pagador[];

  constructor(
    private chequeService: ChequeService,
    private clienteService: ClienteService,
    private pagadorService: PagadorService,
    private showMessageService: ShowMessageService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();

    this.clienteService.read().subscribe((clientes) => {
      this.clienteCombo = clientes;
    });
    this.pagadorService.read().subscribe((pagadores) => {
      this.pagadorCombo = pagadores;
    });    
  }

  createForm():void{
    this.chequeForm = this.formBuilder.group({   
      pagador: ["", Validators.required],
      cliente: ["", Validators.required],
      dataVencimento: [null, Validators.required],
      valor: [null, Validators.required]
    });
  }

  criarCheque(): void {
    const cheque = this.chequeForm.getRawValue() as Cheque;
    this.chequeService.create(cheque).subscribe(()=>{
      this.showMessageService.showMessage("Cheque cadastrado com sucesso!");
      this.router.navigate(['/cheques']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/cheques']);
  }

  verificaValidTouched(field){  
    return !this.chequeForm.get(field).valid && this.chequeForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }
}
