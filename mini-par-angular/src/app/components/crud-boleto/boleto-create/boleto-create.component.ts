import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Pagador } from 'src/app/models/pagador';
import { BoletoService } from 'src/app/services/boleto.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PagadorService } from 'src/app/services/pagador.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { Router } from '@angular/router';
import { Boleto } from 'src/app/models/boleto';

@Component({
  templateUrl: './boleto-create.component.html',
  styleUrls: ['./boleto-create.component.css']
})
export class BoletoCreateComponent implements OnInit {

  boletoForm: FormGroup;
  clienteCombo: Cliente[];
  pagadorCombo: Pagador[];

  constructor(
    private boletoService: BoletoService,
    private clienteService: ClienteService,
    private pagadorService: PagadorService,
    private showMessageService: ShowMessageService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe((clientes) => {
      this.clienteCombo = clientes;
    });
    this.pagadorService.read().subscribe((pagadores) => {
      this.pagadorCombo = pagadores;
    });

    this.boletoForm = this.formBuilder.group({
      
      pagador: ["", Validators.required],
      cliente: ["", Validators.required],
      dataVencimento: [null, Validators.required],
      valor: [null, Validators.required]
    })
  }

  criarBoleto(): void {
    const boleto = this.boletoForm.getRawValue() as Boleto;
    this.boletoService.create(boleto).subscribe(()=>{
      this.showMessageService.showMessage("Boleto cadastrado com sucesso!");
      this.router.navigate(['/boletos']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/boletos']);
  }

  verificaValidTouched(field){  
    return !this.boletoForm.get(field).valid && this.boletoForm.get(field).touched;  
  }

  aplicaCssErro(field){
    return{
      'has-error': this.verificaValidTouched(field),
      'has-feedback': this.verificaValidTouched(field)
    };
  }

}
